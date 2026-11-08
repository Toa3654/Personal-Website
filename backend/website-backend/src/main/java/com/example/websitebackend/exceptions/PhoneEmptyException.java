package com.example.websitebackend.exceptions;

public class PhoneEmptyException extends RuntimeException {
    public PhoneEmptyException() {
        super("Phone cannot be empty. Please enter a valid Phone Number.");
    }
}
