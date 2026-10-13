package com.example.websitebackend.exceptions;

public class NameEmptyException extends RuntimeException {

    public NameEmptyException() {
        super("Name cannot be empty. Please enter a valid name.");
    }
}