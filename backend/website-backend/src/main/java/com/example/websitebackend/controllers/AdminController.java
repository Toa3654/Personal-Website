package com.example.websitebackend.controllers;

import com.example.websitebackend.models.Booking;
import com.example.websitebackend.models.Contact;
import com.example.websitebackend.models.User;
import com.example.websitebackend.models.enums.Role;
import com.example.websitebackend.services.AdminService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/personalwebsite/admin")
@CrossOrigin(
        origins = "http://localhost:5173",
        allowCredentials = "true"
)
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    private boolean isAdmin(HttpSession session) {

        Object role = session.getAttribute("role");

        return role != null &&
                role.equals(Role.ADMIN);
    }

    @GetMapping("/contacts")
    public ResponseEntity<?> getAllContacts(
            HttpSession session
    ) {

        if (!isAdmin(session)) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Admin access required.");
        }

        return ResponseEntity.ok(
                adminService.getAllContacts()
        );
    }

    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers(
            HttpSession session
    ) {

        if (!isAdmin(session)) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Admin access required.");
        }

        return ResponseEntity.ok(
                adminService.getAllUsers()
        );
    }

    @GetMapping("/bookings")
    public ResponseEntity<?> getAllBookings(
            HttpSession session
    ) {

        if (!isAdmin(session)) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Admin access required.");
        }

        return ResponseEntity.ok(
                adminService.getAllBookings()
        );
    }

    @GetMapping("/bookings/month/{month}")
    public ResponseEntity<?> getBookingsByMonth(
            @PathVariable int month,
            HttpSession session
    ) {

        if (!isAdmin(session)) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Admin access required.");
        }

        return ResponseEntity.ok(
                adminService.getBookingsByMonth(month)
        );
    }

    @GetMapping("/bookings/day/{date}")
    public ResponseEntity<?> getBookingsByDay(
            @PathVariable LocalDate date,
            HttpSession session
    ) {

        if (!isAdmin(session)) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Admin access required.");
        }

        return ResponseEntity.ok(
                adminService.getBookingsByDay(date)
        );
    }

    @GetMapping("/bookings/service/{service}")
    public ResponseEntity<?> getBookingsByService(
            @PathVariable String service,
            HttpSession session
    ) {

        if (!isAdmin(session)) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Admin access required.");
        }

        return ResponseEntity.ok(
                adminService.getBookingsByService(service)
        );
    }

    @GetMapping("/total-users")
    public ResponseEntity<?> getTotalUsers(
            HttpSession session
    ) {

        if (!isAdmin(session)) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Admin access required.");
        }

        return ResponseEntity.ok(
                adminService.getTotalUsers()
        );
    }

    @GetMapping("/total-bookings")
    public ResponseEntity<?> getTotalBookings(
            HttpSession session
    ) {

        if (!isAdmin(session)) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Admin access required.");
        }

        return ResponseEntity.ok(
                adminService.getTotalBookings()
        );
    }

    @GetMapping("/total-contacts")
    public ResponseEntity<?> getTotalContacts(
            HttpSession session
    ) {

        if (!isAdmin(session)) {
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Admin access required.");
        }

        return ResponseEntity.ok(
                adminService.getTotalContacts()
        );
    }
}