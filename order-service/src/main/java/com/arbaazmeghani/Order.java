package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
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

    private BigDecimal totalCost;
    private OrderStatus orderStatus = OrderStatus.PROCESSING;

    private Customer customer;
    private Address address;

    @OneToMany
    private Product product;
}
