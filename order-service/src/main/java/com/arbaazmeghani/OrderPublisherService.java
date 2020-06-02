package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderConstants;
import com.arbaazmeghani.order.OrderStatus;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

@Service
public class OrderPublisherService {
    private OrderQueue orderQueue;

    public OrderPublisherService(OrderQueue orderQueue) {
        this.orderQueue = orderQueue;
    }

    public void publishOrder(Order order, OrderStatus orderStatus) {
        orderQueue.publishOrder().send(MessageBuilder.withPayload(order)
                .setHeader(OrderConstants.ORDER_STATUS_HEADER, orderStatus)
                .build());
    }
}
