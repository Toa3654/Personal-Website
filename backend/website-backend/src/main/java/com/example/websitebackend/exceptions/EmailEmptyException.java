package com.example.websitebackend.exceptions;

public class EmailEmptyException extends RuntimeException {

    public EmailEmptyException() {
        super("Email cannot be empty. Please enter a valid email address.");
    }
}