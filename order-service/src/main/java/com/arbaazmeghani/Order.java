package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Orders")
public class Order {

    @Id
    @GeneratedValue
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
