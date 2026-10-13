package com.example.websitebackend.services;

import com.example.websitebackend.exceptions.*;
import com.example.websitebackend.models.User;
import com.example.websitebackend.iServices.IUserServices;
import com.example.websitebackend.iServices.UserRepository;
import org.jspecify.annotations.NonNull;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserServices {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addUser(User user) {
        try{
            return userRepository.save(checkUser(user));
        }catch(Exception e){
            throw new RuntimeException();
        }
    }

    @Override
    public User updateUser(User user, String id) {
        user = checkUser(user);

        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());

        return userRepository.save(existingUser);
    }

    @Override
    public User getUserByEmail(String email) {
        return checkUser(userRepository.getUserByEmail(email));
    }
    @Override
    public User getUserById(String id) {
        return checkUser(userRepository.getUserById(id));
    }


    @Override
    public void deleteUserById(String id) {
        userRepository.deleteUserById(id);
    }
    /**
     * validates user input data keeps code dry
     * as it is used multiple times
     * @param user
     * @return
     */
    @NonNull
    private User checkUser(User user) {
        if (user == null){
            throw new RuntimeException();
        }
        if(user.email.isEmpty()) {
            throw new EmailEmptyException();
        }
        if(user.name.isEmpty()){
            throw new NameEmptyException();
        }
        if(user.password.isEmpty()){
            throw new PasswordEmptyException();
        }
        return user;
    }
}