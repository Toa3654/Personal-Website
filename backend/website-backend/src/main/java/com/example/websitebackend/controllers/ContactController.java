package com.example.websitebackend.controllers;

import com.example.websitebackend.models.Contact;
import com.example.websitebackend.services.ContactService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/personalwebsite/contacts")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }


    @PostMapping("/add")
    public Contact addContact(@RequestBody Contact contact) {
        return contactService.addContact(contact);
    }


    @PutMapping("/update/{id}")
    public Contact updateContact(
            @RequestBody Contact contact,
            @PathVariable String id
    ) {
        return contactService.updateContact(contact, id);
    }


    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable String id) {
        return contactService.getContactById(id);
    }


    @GetMapping("/name/{name}")
    public Contact getContactByName(@PathVariable String name) {
        return contactService.getContactByName(name);
    }


    @DeleteMapping("/{id}")
    public void deleteContactById(@PathVariable String id) {
        contactService.deleteContactById(id);
    }
}