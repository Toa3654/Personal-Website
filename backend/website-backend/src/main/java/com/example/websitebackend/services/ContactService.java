package com.example.websitebackend.services;

import com.example.websitebackend.exceptions.*;
import com.example.websitebackend.iServices.ContactRepository;
import com.example.websitebackend.iServices.IContactServices;
import com.example.websitebackend.models.Contact;
import com.example.websitebackend.models.EmailDetails;
import org.jspecify.annotations.NonNull;
import org.springframework.stereotype.Service;

@Service
public class ContactService implements IContactServices {

    private final ContactRepository contactRepository;
    private final EmailService emailService;

    public ContactService(
            ContactRepository contactRepository,
            EmailService emailService
    ) {
        this.contactRepository = contactRepository;
        this.emailService = emailService;
    }

    @Override
    public Contact addContact(Contact contact) {

        checkContact(contact);

        Contact savedContact =
                contactRepository.save(contact);

        EmailDetails emailDetails =
                new EmailDetails();

        emailDetails.setRecipient(
                "your_email@gmail.com"
        );

        emailDetails.setSubject(
                "New Contact Form Message From "
                        + contact.getName()
        );

        emailDetails.setMsgBody(
                "Name: " + contact.getName()
                        + "\n\nEmail: "
                        + contact.getEmail()
                        + "\n\nPhone: "
                        + contact.getPhone()
                        + "\n\nMessage:\n"
                        + contact.getMessage()
        );

        emailService.sendSimpleMail(emailDetails);

        return savedContact;
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
    private Contact checkContact(Contact contact) {

        if (contact == null) {
            throw new RuntimeException("Contact cannot be null");
        }

        if (contact.getEmail() == null || contact.getEmail().isEmpty()) {
            throw new EmailEmptyException();
        }

        if (contact.getMessage() == null || contact.getMessage().isEmpty()) {
            throw new MessageEmptyException();
        }

        if (contact.getName() == null || contact.getName().isEmpty()) {
            throw new NameEmptyException();
        }

        return contact;
    }
}
