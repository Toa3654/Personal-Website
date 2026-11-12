package com.example.websitebackend.controllers;

import com.example.websitebackend.models.Booking;
import com.example.websitebackend.services.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/personalwebsite/bookings")
@CrossOrigin(
        origins = "http://localhost:5173",
        allowCredentials = "true"
)
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }


    @PostMapping("/add")
    public Booking addBooking(@RequestBody Booking booking) {
        return bookingService.addBooking(booking);
    }


    @PutMapping("/update/{id}")
    public Booking updateBooking(
            @RequestBody Booking booking,
            @PathVariable String id
    ) {
        return bookingService.updateBooking(booking, id);
    }


    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable String id) {
        return bookingService.getBookingById(id);
    }


    @GetMapping("/email/{email}")
    public List<Booking> getBookingsByEmail(
            @PathVariable String email
    ) {
        return bookingService.getBookingsByEmail(email);
    }


    @DeleteMapping("/{id}")
    public void deleteBookingById(@PathVariable String id) {
        bookingService.deleteBookingById(id);
    }
}