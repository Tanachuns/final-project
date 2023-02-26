package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.OrderEntity;
import com.example.demo.entities.PlanEntity;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {

}
