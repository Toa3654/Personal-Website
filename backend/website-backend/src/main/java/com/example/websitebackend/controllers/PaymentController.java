package com.example.websitebackend.controllers;

import com.example.websitebackend.services.PaymentService;
import com.squareup.square.types.CreatePaymentResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/personalwebsite/payments")
@CrossOrigin(
        origins = "http://localhost:5173",
        allowCredentials = "true"
)
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createPayment(
            @RequestBody Map<String, String> request
    ) {

        try {

            String sourceId = request.get("sourceId");
            String amountString = request.get("amount");

            if (sourceId == null || sourceId.isBlank()) {
                return ResponseEntity
                        .badRequest()
                        .body("sourceId is required");
            }

            if (amountString == null || amountString.isBlank()) {
                return ResponseEntity
                        .badRequest()
                        .body("amount is required");
            }

            long amount = Long.parseLong(amountString);

            CreatePaymentResponse response =
                    paymentService.createPayment(
                            sourceId,
                            amount
                    );

            return ResponseEntity.ok(
                    Map.of(
                            "message",
                            "Payment request completed"
                    )
            );

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(e.toString());
        }
    }
}