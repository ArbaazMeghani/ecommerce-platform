package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderConstants;
import com.arbaazmeghani.order.OrderStatus;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class OrderPublisherService {
    private OrderQueue orderQueue;

    public OrderPublisherService(OrderQueue orderQueue) {
        this.orderQueue = orderQueue;
    }

    public void publishOrder(Order order, OrderStatus orderStatus) {
        log.info("Order status updated for order Id: {}", order.getOrderId());
        orderQueue.publishOrder().send(MessageBuilder.withPayload(order)
                .setHeader(OrderConstants.ORDER_STATUS_HEADER, orderStatus)
                .build());
    }
}
