package com.example.websitebackend.iServices;

import com.example.websitebackend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    User getUserByEmail(String email);

    User getUserById(String id);

    void deleteUserById(String id);
}