package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.PlanEntity;
import com.example.demo.repository.PlanRepository;

@RestController
public class PlanController {

    @Autowired
    private PlanRepository planRepository;

    @RequestMapping(value = "/plan", method = RequestMethod.GET)
    public ResponseEntity<Object> getAllPlan() {
        try {
            List<PlanEntity> plans = planRepository.findAll();
            return new ResponseEntity<>(plans, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value = "/plan/{id}", method = RequestMethod.GET)
    public ResponseEntity<Object> getPlanById(@PathVariable("id") Integer id) {
        try {
            Optional<PlanEntity> opt = planRepository.findById(id);
            return new ResponseEntity<>(opt.get(), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping(value = "/plan", method = RequestMethod.POST)
    public ResponseEntity<Object> postAgent(
            @RequestBody HashMap<String, String> data) {
        try {
            PlanEntity plan = new PlanEntity(data.get("name"), data.get("desc"), Integer.parseInt(
                    data.get("price")), Integer.parseInt(data.get("coverage")));
            planRepository.save(plan);
            return new ResponseEntity<>(plan, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/plan/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object> putAgent(
            @RequestBody HashMap<String, String> data,
            @PathVariable("id") Integer id) {
        try {
            Optional<PlanEntity> opt = planRepository.findById(id);
            PlanEntity plan = opt.get();
            if (data.get("name") != null) {
                plan.setName(data.get("name"));
            }
            if (data.get("description") != null) {
                plan.setDesc(data.get("description"));
            }
            if (data.get("price") != null) {
                plan.setPrice(Integer.parseInt(data.get("price")));
            }
            if (data.get("coverage") != null) {
                plan.setCoverage(Integer.parseInt(data.get("coverage")));
            }
            planRepository.save(plan);
            return new ResponseEntity<>(plan, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/plan/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> deleteAgent(@PathVariable("id") Integer id) {

        try {
            Optional<PlanEntity> opt = planRepository.findById(id);
            PlanEntity plan = opt.get();
            planRepository.delete(plan);
            return new ResponseEntity<>(plan, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.toString(), HttpStatus.BAD_REQUEST);
        }
    }
}
