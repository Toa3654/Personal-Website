package com.example.websitebackend.iServices;

import com.example.websitebackend.models.Contact;

import java.util.List;

public interface IContactServices {

    Contact addContact(Contact contact);
    Contact updateContact(Contact contact, String id);
    Contact getContactById(String id);
    Contact getContactByName(String name);
    void deleteContactById(String id);

}