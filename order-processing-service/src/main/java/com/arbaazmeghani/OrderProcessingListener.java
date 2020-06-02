package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderConstants;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.stereotype.Service;

@Service
public class OrderProcessingListener {
    private OrderProcessingService orderProcessingService;

    public OrderProcessingListener(OrderProcessingService orderProcessingService) {
        this.orderProcessingService = orderProcessingService;
    }

    @StreamListener(value = OrderConstants.ORDERS_INPUT, condition = "headers['orderStatus'] == 'PROCESSING'")
    public void processOrder(Order order) {
        orderProcessingService.processOrder(order);
    }
}
