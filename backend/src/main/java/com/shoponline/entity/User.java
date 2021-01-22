package com.shoponline.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;


@Getter
@Setter
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String email;
    private String token;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Product> products;
}
