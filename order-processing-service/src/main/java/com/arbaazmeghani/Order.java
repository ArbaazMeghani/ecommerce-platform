package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Order {
    private Long orderId;

    private BigDecimal totalCost;
    private OrderStatus orderStatus = OrderStatus.PROCESSING;

    private Customer customer;
    private List<Product> product;
}
