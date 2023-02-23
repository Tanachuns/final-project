// package com.example.demo.controller;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;

// import com.example.demo.entity.Employee;
// import com.example.demo.repository.EmployeeRepository;
// import com.example.service.TokenService;

// @RestController
// public class AuthController {
// @Autowired
// EmployeeRepository employeeRepository;

// private final TokenService tokenService;

// public AuthController(TokenService tokenService) {
// this.tokenService = tokenService;
// }

// // @PostMapping("/login")
// // public String login(Authentication authentication) {
// // System.out.println("Token requested for user: '{}' " +
// // authentication.getName());
// // String token = tokenService.generateToken(authentication);
// // System.out.println("Token granted: {} " + token);
// // return token;
// // }

// // @PostMapping("/register")
// // public String reg(Authentication authentication) {
// // System.out.println("Token requested for user: '{}' " +
// // authentication.getName());
// // String token = tokenService.generateToken(authentication);
// // System.out.println("Token granted: {} " + token);
// // return token;
// // }

// @RequestMapping(value = "/register", method = RequestMethod.POST)
// public List<Employee> register(@RequestParam("firstname") String firstname,
// @RequestParam("password") String password) {
// BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
// String hashedPassword = passwordEncoder.encode(password);
// Employee employee = new Employee(firstname, hashedPassword);
// employeeRepository.save(employee);
// return employeeRepository.findAll();
// }

// @RequestMapping(value = "/login", method = RequestMethod.POST)
// public ResponseEntity<Object> login(
// Authentication authentication, @RequestParam("firstname") String firstname,
// @RequestParam("password") String password) {
// BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
// try {
// Optional<Employee> opt = employeeRepository.findByName(firstname);
// Employee emp = opt.get();
// if (passwordEncoder.matches(password, emp.getPassword())) {
// String token = tokenService.generateToken(authentication);
// return new ResponseEntity<>(token, HttpStatus.OK);
// }
// return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);

// } catch (Exception e) {
// return new ResponseEntity<>(HttpStatus.NOT_FOUND);
// }
// }
// }
