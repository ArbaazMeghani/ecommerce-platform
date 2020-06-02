package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Order {

    private Long id;

    private String firstName;
    private String lastName;
    private String addressLine1;
    private String addressLine2;
    private String email;
    private String phoneNumber;
    private Integer productId;
    private Integer quantity;
    private BigDecimal totalCost;

    private OrderStatus orderStatus = OrderStatus.PROCESSING;
}
