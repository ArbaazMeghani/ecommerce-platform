package com.arbaazmeghani;

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

    public OrderService(OrderRepository orderRepository, OrderPublisherService orderPublisherService) {
        this.orderRepository = orderRepository;
        this.orderPublisherService = orderPublisherService;
    }

    public void addOrder(Order order) {
        orderRepository.save(order);
        log.info("New Order Received with ID: {}", order.getOrderId());
        orderPublisherService.publishOrder(order, order.getOrderStatus());
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
