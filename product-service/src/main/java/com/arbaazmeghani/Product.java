package com.arbaazmeghani;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Product {

    @Id
    @GeneratedValue
    private Long productId;

    private String title;
    private String description;
    private BigDecimal price;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Image> images;
}
