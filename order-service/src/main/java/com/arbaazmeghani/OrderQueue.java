package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderConstants;
import org.springframework.cloud.stream.annotation.Input;
import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.SubscribableChannel;

public interface OrderQueue {
    @Input(OrderConstants.ORDERS_INPUT)
    SubscribableChannel retrieveOrder();

    @Output(OrderConstants.ORDERS_OUTPUT)
    MessageChannel publishOrder();
}
