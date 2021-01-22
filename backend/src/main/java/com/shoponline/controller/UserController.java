package com.shoponline.controller;

import com.shoponline.entity.User;
import com.shoponline.model.request.UserLogin;
import com.shoponline.model.response.Res;
import com.shoponline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping(value = "/register")
    public Res register(@RequestBody User user){
        return userService.register(user);
    }

    @CrossOrigin
    @PostMapping(value = "/login")
    public Res login(@RequestBody UserLogin login){
        return userService.login(login);
    }

    @CrossOrigin
    @GetMapping(value = "/getUsers")
    public List<User> getUsers(){
        return userService.getUsers();
    }
}
