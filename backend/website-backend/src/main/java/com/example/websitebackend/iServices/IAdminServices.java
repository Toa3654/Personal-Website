package com.example.websitebackend.iServices;

import com.example.websitebackend.models.Booking;
import com.example.websitebackend.models.Contact;
import com.example.websitebackend.models.User;

import java.time.LocalDate;
import java.util.List;

public interface IAdminServices {

    List<Contact> getAllContacts();

    List<User> getAllUsers();

    List<Booking> getAllBookings();

    List<Booking> getBookingsByMonth(int month);

    List<Booking> getBookingsByDay(LocalDate date);

    List<Booking> getBookingsByService(String service);

    long getTotalUsers();

    long getTotalBookings();

    long getTotalContacts();

    void deleteContact(String id);

    void deleteBooking(String id);

    void deleteUser(String id);
}