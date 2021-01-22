package com.shoponline.controller;

import com.shoponline.entity.Product;
import com.shoponline.model.response.Res;
import com.shoponline.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/product")
public class ProductController {
    @Autowired
    ProductService productService;

    @CrossOrigin
    @GetMapping(value = "/getListProduct")
    public List<Product> getListProduct(){
        return productService.getListProduct();
    }

    @CrossOrigin
    @GetMapping(value = "/getListProduct/{page}")
    public List<Product> getListProductPage(@PathVariable int page){
        return productService.getListProductPage(page);
    }

    @CrossOrigin
    @GetMapping(value = "/getListProductIphone")
    public List<Product> getListProductIphone(){
        return productService.getListProductIphone();
    }

    @CrossOrigin
    @GetMapping(value = "/getListProductSS")
    public List<Product> getListProductSS(){
        return productService.getListProductSS();
    }

    @CrossOrigin
    @GetMapping(value = "/getListProductOppo")
    public List<Product> getListProductOppo(){
        return productService.getListProductOppo();
    }



}
