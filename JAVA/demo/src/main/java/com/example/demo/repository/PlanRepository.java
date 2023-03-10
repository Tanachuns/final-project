package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.PlanEntity;

@Repository
public interface PlanRepository extends JpaRepository<PlanEntity, Integer> {

}
