package com.shoponline.service;

import com.shoponline.entity.User;
import com.shoponline.model.request.RegisterReq;
import com.shoponline.model.request.UserLogin;
import com.shoponline.model.response.Res;
import com.shoponline.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public Res register(User user) {
        if(user.getUsername().isEmpty() || user.getPassword().isEmpty() || user.getEmail().isEmpty())
            return Res.error("Vui lòng nhập đầy đủ thông tin!",null);
        User userExists = userRepository.findUserByUsername(user.getUsername());
        if(userExists == null){
            user.setToken(user.getUsername());
            userRepository.save(user);
            return Res.success("Đăng ký thành công!",user);
        }
        return Res.error("Tài khoản đã tồn tại!",null);
    }

    public Res login(UserLogin login) {
        if(login.getUsername().isEmpty() )
            return Res.error("Vui lòng nhập tên đăng nhập!",null);

        if(login.getPassword().isEmpty() )
            return Res.error("Vui lòng nhập mật khẩu!",null);
        String username = login.getUsername();
        User user = userRepository.findUserByUsername(username);
        if(user != null && login.getPassword().equals(user.getPassword()))
            return Res.success("Đăng nhập thành công!",user);

        return Res.error("Đăng nhập thất bại!",null);
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
