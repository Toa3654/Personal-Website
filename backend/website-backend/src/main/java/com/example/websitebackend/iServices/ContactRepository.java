package com.example.websitebackend.iServices;

import com.example.websitebackend.models.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact, String> {

    Contact getContactById(String id);

    Contact getContactByName(String name);

    void deleteContactById(String id);
}