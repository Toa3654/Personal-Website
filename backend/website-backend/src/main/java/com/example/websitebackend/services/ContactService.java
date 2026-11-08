package com.example.websitebackend.services;

import com.example.websitebackend.exceptions.*;
import com.example.websitebackend.iServices.ContactRepository;
import com.example.websitebackend.iServices.IContactServices;
import com.example.websitebackend.models.Contact;
import org.jspecify.annotations.NonNull;
import org.springframework.stereotype.Service;

@Service
public class ContactService implements IContactServices {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public Contact addContact(Contact contact) {

        return checkContact(contactRepository.save(contact));
    }

    @Override
    public Contact updateContact(Contact contact, String id) {
        Contact existingContact = checkContact(contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found")));
        existingContact.setName(contact.getName());
        existingContact.setEmail(contact.getEmail());
        existingContact.setMessage(contact.getMessage());
        existingContact.setPhone(contact.getPhone());
        return contactRepository.save(existingContact);
    }

    @Override
    public Contact getContactById(String id) {
        return checkContact(contactRepository.getContactById(id));
    }

    @Override
    public Contact getContactByName(String name) {
        return checkContact(contactRepository.getContactByName(name));
    }

    @Override
    public void deleteContactById(String id) {
        contactRepository.deleteContactById(id);
    }
    @NonNull
    private Contact checkContact(Contact contact) {
        if (contact == null){
            throw new RuntimeException();
        }
        if(contact.email.isEmpty()) {
            throw new EmailEmptyException();
        }
        if(contact.message.isEmpty()){
            throw new MessageEmptyException();
        }
        if(contact.name.isEmpty()){
            throw new NameEmptyException();
        }
        if(contact.phone.isEmpty()){
            throw new PhoneEmptyException();
        }

        return contact;
    }
}
