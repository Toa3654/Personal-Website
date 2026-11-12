package com.example.websitebackend.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Email Details and the rest of the email notification
 * code was learned and taken from
 * https://www.geeksforgeeks.org/springboot/spring-boot-sending-email-via-smtp/
 * It uses a built-in springboot email dependency.
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmailDetails {

    private String recipient;
    private String msgBody;
    private String subject;
}