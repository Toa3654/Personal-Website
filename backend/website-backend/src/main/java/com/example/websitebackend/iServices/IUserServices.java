package com.example.websitebackend.iServices;

import com.example.websitebackend.models.User;

public interface IUserServices{

    User addUser(User user);
    User updateUser(User user, String id);

    User getUserByEmail(String email);

    User getUserById(String id);

    void deleteUserById(String id);
}