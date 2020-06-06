package com.arbaazmeghani;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Address {
    private Long addressId;
    private String streetAddress;
    private String zipCode;
    private String state;
    private String city;
}
