package com.example.websitebackend.iServices;

import com.example.websitebackend.models.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends MongoRepository<Booking, String> {

    List<Booking> getBookingsByEmail(String email);

    Booking getBookingById(String id);

    void deleteBookingById(String id); 
}