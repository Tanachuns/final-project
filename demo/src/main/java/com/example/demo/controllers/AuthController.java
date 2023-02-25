package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.UsersEntity;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.JwtService;

@RestController
public class AuthController {
    @Autowired
    UserRepository userRepository;

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public UsersEntity register(@RequestBody HashMap<String, String> data) {
        String email = data.get("email");
        String password = data.get("password");
        String citizen_id = data.get("citizen_id");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(password);
        UsersEntity user = new UsersEntity(citizen_id, email, hashedPassword);
        userRepository.save(user);
        return user;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Object> login(
            Authentication authentication, @RequestBody HashMap<String, String> data) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String email = data.get("email");
        String password = data.get("password");
        try {
            Optional<UsersEntity> opt = userRepository.findByEmail(email);
            UsersEntity user = opt.get();
            if (passwordEncoder.matches(password, user.getPassword())) {
                String token = jwtService.generateToken(authentication);
                return new ResponseEntity<>(token, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
