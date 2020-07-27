package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderStatus;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class OrderProcessingService {
    private OrderPublisherService orderPublisherService;

    public OrderProcessingService(OrderPublisherService orderPublisherService) {
        this.orderPublisherService = orderPublisherService;
    }

    public void processOrder(Order order) {
        log.info("New Order Received with ID: {}", order.getOrderId());
        order.setOrderStatus(OrderStatus.SHIPPED);
        orderPublisherService.publishOrder(order, OrderStatus.SHIPPED);
    }
}
