package com.example.websitebackend.services;

import com.squareup.square.SquareClient;
import com.squareup.square.types.CreatePaymentRequest;
import com.squareup.square.types.CreatePaymentResponse;
import com.squareup.square.types.Currency;
import com.squareup.square.types.Money;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PaymentService {

    private final SquareClient squareClient;

    @Value("${square.location-id}")
    private String locationId;

    public PaymentService(SquareClient squareClient) {
        this.squareClient = squareClient;
    }

    public CreatePaymentResponse createPayment(
            String sourceId,
            long amount
    ) {

        Money money = Money.builder()
                .amount(amount)
                .currency(Currency.USD)
                .build();

        CreatePaymentRequest request =
                CreatePaymentRequest.builder()
                        .sourceId(sourceId)
                        .idempotencyKey(UUID.randomUUID().toString())
                        .amountMoney(money)
                        .locationId(locationId)
                        .build();

        return squareClient
                .payments()
                .create(request);
    }
}