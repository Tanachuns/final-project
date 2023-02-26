package com.example.demo.controllers;

import java.util.HashMap;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.UsersEntity;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.JwtService;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {
    @Autowired
    UserRepository userRepository;

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public UsersEntity register(@RequestBody HashMap<String, String> data) {
        String title = data.get("title");
        String firstname = data.get("firstname");
        String lastname = data.get("lastname");
        String birth_date = data.get("birth_date");
        String citizen_id = data.get("citizen_id");
        String email = data.get("email");
        String phone_number = data.get("phone_number");
        String address_house_number = data.get("address_house_number");
        String address_moo = data.get("address_moo");
        String address_village = data.get("address_village");
        String address_soi = data.get("address_soi");
        String address_road = data.get("address_road");
        String address_amphur = data.get("address_amphur");
        String address_tumbon = data.get("address_tumbon");
        String address_province = data.get("address_province");
        String address_zipcode = data.get("address_zipcode");
        String password = data.get("password");
        String license_number = data.get("license_number");
        String license_exp_date = data.get("license_exp_date");
        String type = data.get("type");
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(password);
        UUID uuid = UUID.randomUUID();
        System.out.println(uuid);
        UsersEntity user = new UsersEntity(
                title, firstname, lastname, birth_date, citizen_id, email, phone_number, address_house_number,
                address_moo, address_village, address_soi, address_road, address_amphur, address_tumbon,
                address_province, address_zipcode, hashedPassword, license_number, license_exp_date, type,
                uuid.toString());
        userRepository.save(user);
        return user;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<Object> login(Authentication authentication, @RequestBody HashMap<String, String> data) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String email = data.get("email");
        String password = data.get("password");
        try {
            Optional<UsersEntity> opt = userRepository.findByEmail(email);
            UsersEntity user = opt.get();

            if (user.getType() != null && passwordEncoder.matches(password, user.getPassword())) {
                String token = jwtService.generateToken(user);
                HashMap<String, Object> res = new HashMap<>();
                res.put("access_token", token);
                res.put("expires_in", "3600");
                res.put("user", user);

                return new ResponseEntity<>(res, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            return new ResponseEntity<>(e, HttpStatus.NOT_FOUND);
        }
    }
}
