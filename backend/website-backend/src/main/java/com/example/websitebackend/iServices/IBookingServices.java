package com.example.websitebackend.iServices;

import com.example.websitebackend.models.Booking;

import java.util.List;

public interface IBookingServices {

    Booking addBooking(Booking booking);

    Booking updateBooking(Booking booking, String id);

    Booking getBookingById(String id);

    List<Booking> getBookingsByEmail(String email);

    void deleteBookingById(String id);
}