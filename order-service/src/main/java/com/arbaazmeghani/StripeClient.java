package com.arbaazmeghani;

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
    }

    public void charge(String stripePaymentId, BigDecimal amount) {
        log.info("key: {}", STRIPE_API_KEY);
        log.info("secret: {}", STRIPE_API_SECRET);
        log.info("Account charged amount: {}", amount);
    }
}
