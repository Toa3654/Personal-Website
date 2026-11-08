package com.example.websitebackend.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * The User class is used to save users information for signups and log ins
 * It can also be used for future contacts from me.
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "User")
public class User {

    @Id
    public String id;
    public String email;
    public String password;
    public String firstname;
    public String lastname;
    public String phone;
}