package com.arbaazmeghani;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@Slf4j
public class OrderService {
    private OrderRepository orderRepository;
    private OrderPublisherService orderPublisherService;
    private StripeClient stripeClient;

    public OrderService(OrderRepository orderRepository, OrderPublisherService orderPublisherService, StripeClient stripeClient) {
        this.orderRepository = orderRepository;
        this.orderPublisherService = orderPublisherService;
        this.stripeClient = stripeClient;
    }

    public Order addOrder(Order order) throws StripeException {
        PaymentIntent payment = stripeClient.charge(order.getStripePaymentId(), order.getTotalCost());
        order.setPaymentId(payment.getId());
        orderRepository.save(order);
        log.info("New Order Received with ID: {}", order.getOrderId());
        orderPublisherService.publishOrder(order, order.getOrderStatus());

        return order;
    }

    public Optional<Order> retrieveOrder(Long id) {
        return orderRepository.findById(id);
    }

    public void updateOrderStatus(Long orderId, Order order) {
        Optional<Order> existingOrder = orderRepository.findById(orderId);

        if(!orderId.equals(order.getOrderId()) || !existingOrder.isPresent()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        Order updatedOrder = existingOrder.get();
        updatedOrder.setOrderStatus(order.getOrderStatus());

        orderRepository.save(updatedOrder);
    }
}
