package com.arbaazmeghani;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> retrieveProducts() {
        return ResponseEntity.status(HttpStatus.OK).body(productService.retrieveProducts());
    }

    @GetMapping("/products/{productId}")
    public ResponseEntity<Product> retrieveProducts(@PathVariable Long productId) {
        return productService.retrieveProduct(productId)
                .map(ResponseEntity.status(HttpStatus.OK)::body)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PostMapping("/products")
    public void addProduct(@RequestBody Product product) {
        productService.addProduct(product);
    }

    @PutMapping("/products/{productId}")
    public void updateProduct(@PathVariable Long productId, @RequestBody Product product) {
        productService.updateProduct(productId, product);
    }
}
