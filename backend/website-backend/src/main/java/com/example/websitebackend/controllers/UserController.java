package com.example.websitebackend.controllers;

import com.example.websitebackend.models.User;
import com.example.websitebackend.services.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/personalwebsite/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @PutMapping("/update/{id}")
    public User updateUser(@RequestBody User user,@PathVariable String id) {
        return userService.updateUser(user, id);
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable String id) {
        return userService.getUserById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUserById(id);
    }
}