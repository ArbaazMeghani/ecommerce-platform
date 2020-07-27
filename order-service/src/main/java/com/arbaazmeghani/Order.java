package com.arbaazmeghani;

import com.arbaazmeghani.order.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Orders")
public class Order {

    @Id
    @GeneratedValue
    private Long orderId;

    private BigDecimal totalCost;

    @Transient
    private String stripePaymentId;

    @Builder.Default
    private OrderStatus orderStatus = OrderStatus.PROCESSING;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="CUSTOMER_ID")
    private Customer customer;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Product> products;
}
