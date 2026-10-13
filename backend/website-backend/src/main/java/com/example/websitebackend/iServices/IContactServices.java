package com.example.websitebackend.iServices;

import com.example.websitebackend.models.Contact;

public interface IContactServices {

    Contact addContact(Contact contact);

    Contact updateContact(Contact contact, String id);

    Contact getContactById(String id);

    void deleteContactById(String id);
}