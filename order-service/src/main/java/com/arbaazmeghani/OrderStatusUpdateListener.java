package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderConstants;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class OrderStatusUpdateListener {

    private OrderService orderService;

    public OrderStatusUpdateListener(OrderService orderService) {
        this.orderService = orderService;
    }

    @StreamListener(OrderConstants.ORDERS_INPUT)
    public void updateOrderStatus(Order order) {
        orderService.updateOrderStatus(order.getId(), order);
    }
}
