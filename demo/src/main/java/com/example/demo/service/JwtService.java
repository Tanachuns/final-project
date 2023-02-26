package com.example.demo.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import com.example.demo.entities.UsersEntity;

@Service
public class JwtService {
    private final JwtEncoder encoder;

    public JwtService(JwtEncoder encoder) {
        this.encoder = encoder;
    }

    public String generateToken(UsersEntity user) {
        Instant now = Instant.now();
        JwtClaimsSet claims = JwtClaimsSet.builder()
                .subject(user.getEmail())
                .expiresAt(now.plus(1, ChronoUnit.HOURS))
                .build();

        JwsHeader jwsHeader = JwsHeader.with(() -> "HS256").build();
        return this.encoder.encode(JwtEncoderParameters.from(jwsHeader, claims)).getTokenValue();
    }

}