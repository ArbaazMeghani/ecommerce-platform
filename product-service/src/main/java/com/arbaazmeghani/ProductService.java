package com.arbaazmeghani;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> retrieveProducts() {
        return productRepository.findAll();
    }

    public void addProduct(Product product) {
        productRepository.save(product);
    }

    public void updateProduct(Long productId, Product product) {
        if(!productId.equals(product.getId()) || !productRepository.findById(productId).isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        productRepository.save(product);
    }

    public Optional<Product> retrieveProduct(Long productId) {
        return productRepository.findById(productId);
    }
}
