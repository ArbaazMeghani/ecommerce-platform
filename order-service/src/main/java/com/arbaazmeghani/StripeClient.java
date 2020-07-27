package com.arbaazmeghani;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.Charge;
import com.stripe.model.PaymentIntent;
import com.stripe.param.ChargeCreateParams;
import com.stripe.param.PaymentIntentCreateParams;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
@Slf4j
public class StripeClient {

    private final String STRIPE_API_KEY;
    private final String STRIPE_API_SECRET;

    public StripeClient(@Value("${stripe.api.key}") String stripeApiKey, @Value("${stripe.api.secret}") String stripeApiSecret) {
        STRIPE_API_KEY = stripeApiKey;
        STRIPE_API_SECRET = stripeApiSecret;
        Stripe.apiKey = STRIPE_API_SECRET;
    }

    public PaymentIntent charge(String stripePaymentId, BigDecimal amount) throws StripeException {
        return PaymentIntent.create(PaymentIntentCreateParams.builder()
                .setCurrency("USD")
                .setPaymentMethod(stripePaymentId)
                .setDescription("Payment to Sample.com")
                .setAmount(amount.movePointRight(2).longValue())
                .setConfirm(true)
                .build());
    }
}
