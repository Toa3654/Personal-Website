package com.example.websitebackend.exceptions;

public class PasswordEmptyException extends RuntimeException {

    public PasswordEmptyException() {
        super("Password cannot be empty. Please enter a valid password.");
    }
}