package com.shoponline.service;

import com.shoponline.entity.Product;
import com.shoponline.model.response.Res;
import com.shoponline.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public List<Product> getListProduct() {
        return productRepository.findAll();
    }

    public List<Product> getListProductPage(int page) {
        int limit = 6;

        List<Product> productList = productRepository.findAll();
        int sodu = productList.size()%6;
        int pageNumberExist = (productList.size() - sodu)/6;
        if(sodu > 0)
            pageNumberExist += 1;
        if(page < 1 || page > pageNumberExist)
            return null;
        if(productList.size() <= 6)
            return productList;
        List<Product> productListPage = new ArrayList<>();
        if(page <= pageNumberExist - 1){
            for(int i = (page-1)*6 ;i<((page-1)*6 + limit);i++){
                productListPage.add(productList.get(i));
            }
        }else{
            for(int i = (page-1)*6 ;i<productList.size();i++){
                productListPage.add(productList.get(i));
            }
        }

        return productListPage;
    }

    public List<Product> getListProductIphone() {
        List<Product> productList = productRepository.findAll();
        List<Product> productListIphone = new ArrayList<>();
        for(Product product: productList){
            if(product.getDescription().contains("Apple"))
                productListIphone.add(product);
        }
        return productListIphone;
    }

    public List<Product> getListProductSS() {
        List<Product> productList = productRepository.findAll();
        List<Product> productListSS = new ArrayList<>();
        for(Product product: productList){
            if(product.getDescription().contains("SamSung"))
                productListSS.add(product);
        }
        return productListSS;
    }

    public List<Product> getListProductOppo() {
        List<Product> productList = productRepository.findAll();
        List<Product> productListOppo = new ArrayList<>();
        for(Product product: productList){
            if(product.getDescription().contains("Oppo"))
                productListOppo.add(product);
        }
        return productListOppo;
    }
}
