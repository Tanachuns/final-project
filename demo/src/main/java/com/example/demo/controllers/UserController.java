package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.UsersEntity;
import com.example.demo.repository.UserRepository;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<Object> getAllUser() {
        try {
            List<UsersEntity> users = userRepository.findAll();
            return new ResponseEntity<>(users, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getUserById(@PathVariable("id") Integer id) {
        try {
            Optional<UsersEntity> opt = userRepository.findById(id);
            return new ResponseEntity<>(opt.get(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public ResponseEntity<Object> postUser(
            @RequestBody HashMap<String, String> data) {
        try {
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
            UsersEntity user = new UsersEntity(
                    title, firstname, lastname, birth_date, citizen_id, email, phone_number, address_house_number,
                    address_moo, address_village, address_soi, address_road, address_amphur, address_tumbon,
                    address_province, address_zipcode, password, license_number, license_exp_date, type);
            userRepository.save(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> putAgent(
            @RequestBody HashMap<String, String> data,
            @PathVariable("id") Integer id) {
        try {
            Optional<UsersEntity> opt = userRepository.findById(id);
            UsersEntity user = opt.get();
            if (data.get("title") != null) {
                user.setTitle(data.get("title"));
            }
            if (data.get("firstname") != null) {
                user.setFirstname(data.get("firstname"));
            }
            if (data.get("lastname") != null) {
                user.setLastname(data.get("lastname"));
            }
            if (data.get("birth_date") != null) {
                user.setBirth_date(data.get("birth_date"));
            }
            if (data.get("citizen_id") != null) {
                user.setCitizen_id(data.get("citizen_id"));
            }
            if (data.get("email") != null) {
                user.setEmail(data.get("email"));
            }
            if (data.get("phone_number") != null) {
                user.setPhone_number(data.get("phone_number"));
            }
            if (data.get("address_house_number") != null) {
                user.setaddress_house_number(data.get("address_house_number"));
            }
            if (data.get("address_moo") != null) {
                user.setAddress_moo(data.get("address_moo"));
            }
            if (data.get("address_village") != null) {
                user.setAddress_village(data.get("address_village"));
            }
            if (data.get("address_soi") != null) {
                user.setAddress_soi(data.get("address_soi"));
            }
            if (data.get("address_road") != null) {
                user.setAddress_road(data.get("address_road"));
            }
            if (data.get("address_amphur") != null) {
                user.setaddress_amphur(data.get("address_amphur"));
            }
            if (data.get("address_tumbon") != null) {
                user.setAddress_tumbon(data.get("address_tumbon"));
            }
            if (data.get("address_province") != null) {
                user.setAddress_province(data.get("address_province"));
            }
            if (data.get("address_zipcode") != null) {
                user.setAddress_zipcode(data.get("address_zipcode"));
            }
            if (data.get("password") != null) {
                user.setPassword(data.get("password"));
            }
            if (data.get("license_number") != null) {
                user.setLicense_number(data.get("license_number"));
            }
            if (data.get("license_exp_date") != null) {
                user.setLicense_exp_date(data.get("license_exp_date"));
            }
            if (data.get("type") != null) {
                user.setType(data.get("type"));
            }
            userRepository.save(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteAgent(@PathVariable("id") Integer id) {

        try {
            Optional<UsersEntity> opt = userRepository.findById(id);
            UsersEntity user = opt.get();
            userRepository.delete(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
        }
    }
}
