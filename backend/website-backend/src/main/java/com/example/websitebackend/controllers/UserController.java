package com.example.websitebackend.controllers;
import com.example.websitebackend.models.User;
import com.example.websitebackend.services.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/personalwebsite/users")
@CrossOrigin(
        origins = "http://localhost:5173",
        allowCredentials = "true"
)
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
    public User updateUser(
            @RequestBody User user,
            @PathVariable String id
    ) {
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

    /**
     * This Part of the code is meant to start session for a logged in user
     * it implements code from this website https://www.geeksforgeeks.org/advance-java/spring-boot-session-management/
     * @param loginRequest
     * @param session
     * @return
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody Map<String, String> loginRequest,
            HttpSession session
    ) {

        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        User user = userService.authenticate(email, password);

        if (user == null) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }

        session.setAttribute("userId", user.getId());
        session.setAttribute("email", user.getEmail());

        return ResponseEntity.ok(user);
    }

    /**
     * This allows the session to persist
     * when transitioning from page to page.
     * @param session
     * @return
     */
    @GetMapping("/session/current")
    public ResponseEntity<?> getCurrentSession(HttpSession session) {

        Object userId = session.getAttribute("userId");

        if (userId == null) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("No active session");
        }

        User user = userService.getUserById(userId.toString());

        return ResponseEntity.ok(user);
    }

    /**
     * Allows the user to end session so information
     * can no longer be accessed. Very standard
     * @param session
     * @return
     */
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {

        session.invalidate();

        return ResponseEntity.ok("Logged out successfully");
    }
}