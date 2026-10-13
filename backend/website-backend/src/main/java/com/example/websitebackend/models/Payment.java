package com.example.websitebackend.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "payments")
public class Payment {

    @Id
    public String id;

    public String name;
    public Date expiration_date;

    public String payment_reference;
    public String card_last_four;
}