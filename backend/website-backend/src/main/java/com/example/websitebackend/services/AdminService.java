package com.example.websitebackend.services;

import com.example.websitebackend.iServices.IAdminServices;
import com.example.websitebackend.models.Booking;
import com.example.websitebackend.models.Contact;
import com.example.websitebackend.models.User;
import com.example.websitebackend.iServices.BookingRepository;
import com.example.websitebackend.iServices.ContactRepository;
import com.example.websitebackend.iServices.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AdminService implements IAdminServices {

    private final ContactRepository contactRepository;
    private final UserRepository userRepository;
    private final BookingRepository bookingRepository;

    public AdminService(
            ContactRepository contactRepository,
            UserRepository userRepository,
            BookingRepository bookingRepository
    ) {
        this.contactRepository = contactRepository;
        this.userRepository = userRepository;
        this.bookingRepository = bookingRepository;
    }

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public List<Booking> getBookingsByMonth(int month) {

        return bookingRepository
                .findAll()
                .stream()
                .filter(booking ->
                        booking.getDate() != null &&
                                booking.getDate().getMonthValue() == month
                )
                .toList();
    }

    @Override
    public List<Booking> getBookingsByDay(LocalDate date) {

        return bookingRepository
                .findAll()
                .stream()
                .filter(booking ->
                        booking.getDate() != null &&
                                booking.getDate().equals(date)
                )
                .toList();
    }

    @Override
    public List<Booking> getBookingsByService(String service) {

        return bookingRepository
                .findAll()
                .stream()
                .filter(booking ->
                        booking.getService() != null &&
                                booking.getService()
                                        .name()
                                        .equalsIgnoreCase(service)
                )
                .toList();
    }

    @Override
    public long getTotalUsers() {
        return userRepository.count();
    }

    @Override
    public long getTotalBookings() {
        return bookingRepository.count();
    }

    @Override
    public long getTotalContacts() {
        return contactRepository.count();
    }
}