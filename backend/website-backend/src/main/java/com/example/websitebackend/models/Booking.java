package com.example.websitebackend.models;

import com.example.websitebackend.models.enums.Services;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "bookings")
public class Booking {

    @Id
    private String id;

    private Services service;
    private String name;
    private LocalDate date;
    private String time;
    private String email;
    private String phone;
    private String additionalinfo;
}