package com.example.websitebackend.iServices;

import com.example.websitebackend.models.EmailDetails;

public interface IEmailServices {

    String sendSimpleMail(EmailDetails details);
}