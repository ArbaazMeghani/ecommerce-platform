package com.arbaazmeghani;

import com.stripe.exception.StripeException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@Slf4j
public class OrderController {

    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/orders/{orderId}")
    public ResponseEntity<Order> retrieveOrder(@PathVariable Long orderId) {
        Order order = orderService.retrieveOrder(orderId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Order: " + orderId + " not found."));
        return ResponseEntity.status(HttpStatus.OK).body(order);
    }

    @PostMapping("/orders")
    public Order addOrder(@RequestBody Order order) throws StripeException {
        return orderService.addOrder(order);
    }
}
