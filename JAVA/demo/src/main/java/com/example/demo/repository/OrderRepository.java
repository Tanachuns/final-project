package com.example.demo.repository;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.OrderEntity;
import com.example.demo.entities.PlanEntity;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Integer> {
    @Query(value = "SELECT * FROM orders WHERE citizen_id=?1", nativeQuery = true)
    public ArrayList<OrderEntity> findBycitizenId(String citizen_id);
}
