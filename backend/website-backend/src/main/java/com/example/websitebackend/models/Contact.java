package com.example.websitebackend.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "contact")
public class Contact {

    @Id
    public String id;

    public String name;
    public Date date;
    public String email;
    public int phone;
    public String message;
}