package com.example.websitebackend.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;

/**
 * Contact is used to save contact messages
 * from guests or users when they need to contact me
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "contact")
public class Contact {

    @Id
    public String id;

    public String name;
    private LocalDate date = LocalDate.now();
    public String email;
    public String phone;
    public String message;
}