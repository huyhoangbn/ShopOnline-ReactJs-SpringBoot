package com.shoponline.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity(name = "product")
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;
    private String description;
    private Integer price;
    private Integer inventory;
    private Integer rating;

    @ManyToOne (fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id") // thông qua khóa ngoại userId
    private User user;
}
