package com.example.websitebackend.services;

import com.example.websitebackend.iServices.BookingRepository;
import com.example.websitebackend.iServices.IBookingServices;
import com.example.websitebackend.models.Booking;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService implements IBookingServices {

    private final BookingRepository bookingRepository;

    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @Override
    public Booking addBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public Booking updateBooking(Booking booking, String id) {

        Booking existingBooking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        existingBooking.setService(booking.getService());
        existingBooking.setName(booking.getName());
        existingBooking.setDate(booking.getDate());
        existingBooking.setTime(booking.getTime());
        existingBooking.setEmail(booking.getEmail());
        existingBooking.setPhone(booking.getPhone());
        existingBooking.setAdditionalinfo(booking.getAdditionalinfo());

        return bookingRepository.save(existingBooking);
    }

    @Override
    public Booking getBookingById(String id) {
        return bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
    }

    @Override
    public List<Booking> getBookingsByEmail(String email) {
        return bookingRepository.getBookingsByEmail(email);
    }

    @Override
    public void deleteBookingById(String id) {
        bookingRepository.deleteById(id);
    }
}