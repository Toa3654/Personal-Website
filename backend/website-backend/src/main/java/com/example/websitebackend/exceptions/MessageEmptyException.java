package com.example.websitebackend.exceptions;

public class MessageEmptyException extends RuntimeException {
    public MessageEmptyException() {
        super("Message cannot be empty. Please enter a Message.");
    }
}
