package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.UsersEntity;

@Repository
public interface UserRepository extends JpaRepository<UsersEntity, Integer> {
    @Query(value = "SELECT * FROM users WHERE email=?1", nativeQuery = true)
    public Optional<UsersEntity> findByEmail(String email);
}
