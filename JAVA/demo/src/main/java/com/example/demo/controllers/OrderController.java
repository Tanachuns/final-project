package com.example.demo.controllers;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.OrderEntity;
import com.example.demo.entities.PlanEntity;
import com.example.demo.entities.UsersEntity;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.PlanRepository;
import com.example.demo.repository.UserRepository;

@RestController
@CrossOrigin
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PlanRepository planRepository;

    @RequestMapping(value = "/order", method = RequestMethod.GET)
    public ResponseEntity<Object> getAllOrder() {
        try {
            List<OrderEntity> order = orderRepository.findAll();
            return new ResponseEntity<>(order, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value = "/user/{id}/order", method = RequestMethod.GET)
    public ResponseEntity<Object> getorderBycitizenID(@PathVariable("id") Integer id) {

        List<OrderEntity> opt = orderRepository.findByAgentId(id);
        return new ResponseEntity<>(opt, HttpStatus.OK);

    }

    @RequestMapping(value = "/order/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getorderById(@PathVariable("id") Integer id) {
        try {
            Optional<OrderEntity> opt = orderRepository.findById(id);
            return new ResponseEntity<>(opt.get(), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/order", method = RequestMethod.POST)
    public ResponseEntity<Object> postOrder(
            @RequestBody HashMap<String, String> data) {
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
        String beneficiary_firstname = data.get("beneficiary_firstname");
        String beneficiary_lastname = data.get("beneficiary_lastname");
        String beneficiary_relation = data.get("beneficiary_relation");
        String beneficiary_title = data.get("beneficiary_title");
        String status = data.get("status");
        Integer agent_id = Integer.parseInt(data.get("agent_id"));
        Integer plan_id = Integer.parseInt(data.get("plan_id"));

        try {
            UsersEntity user = userRepository.findById(agent_id).get();
            PlanEntity plan = planRepository.findById(plan_id).get();
            Date cover_start_date = new SimpleDateFormat("yyyy-MM-dd").parse(data.get("cover_start_date"));
            Date cover_end_date = new SimpleDateFormat("yyyy-MM-dd").parse(data.get("cover_end_date"));
            OrderEntity order = new OrderEntity(title, firstname, lastname, birth_date,
                    citizen_id,
                    email, phone_number, address_house_number, address_moo, address_village,
                    address_soi, address_road, address_amphur, address_tumbon,
                    address_province, address_zipcode, cover_start_date, cover_end_date,
                    beneficiary_firstname, beneficiary_lastname, beneficiary_relation,
                    beneficiary_title, status, user, plan);
            orderRepository.save(order);
            return new ResponseEntity<>(order, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/order/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteOrder(@PathVariable("id") Integer id) {

        try {
            Optional<OrderEntity> opt = orderRepository.findById(id);
            OrderEntity order = opt.get();
            orderRepository.delete(order);
            return new ResponseEntity<>(order, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
        }
    }
}
