package com.capacityconnect.service;

import com.capacityconnect.dto.AllDtos.*;
import com.capacityconnect.model.User;
import com.capacityconnect.model.UserProfile;
import com.capacityconnect.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public AuthResponse authenticateOrRegister(AuthRequest request) {
        Optional<User> existingUser = userRepository.findByEmail(request.getEmail());
        User user;

        if (existingUser.isPresent()) {
            user = existingUser.get();
            // Allow dynamic role addition if requested
            if ("TRAINER".equalsIgnoreCase(request.getSelectedRole())) {
                user.setTrainer(true);
            } else if ("ADMIN".equalsIgnoreCase(request.getSelectedRole())) {
                user.setAdmin(true);
            } else {
                user.setTrainee(true);
            }
            userRepository.save(user);
        } else {
            // Register new user
            boolean isTrainer = "TRAINER".equalsIgnoreCase(request.getSelectedRole());
            boolean isAdmin = "ADMIN".equalsIgnoreCase(request.getSelectedRole());
            boolean isTrainee = !isAdmin; // Can be both

            user = User.builder()
                    .fullName(request.getFullName() != null ? request.getFullName() : "Learner " + request.getEmail().split("@")[0])
                    .email(request.getEmail())
                    .passwordHash("$2a$10$encryptedMockPasswordHash123")
                    .avatarUrl("https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150")
                    .primaryRole(User.PrimaryRole.valueOf(request.getSelectedRole() != null ? request.getSelectedRole().toUpperCase() : "TRAINEE"))
                    .isTrainee(isTrainee)
                    .isTrainer(isTrainer)
                    .isAdmin(isAdmin)
                    .isApproved(true)
                    .accountStatus(User.AccountStatus.ACTIVE)
                    .authProvider(request.isGoogleAuth() ? User.AuthProvider.GOOGLE : User.AuthProvider.LOCAL)
                    .build();

            user = userRepository.save(user);
        }

        AuthResponse response = new AuthResponse();
        response.setId(user.getId());
        response.setFullName(user.getFullName());
        response.setEmail(user.getEmail());
        response.setAvatarUrl(user.getAvatarUrl());
        response.setActiveRole(request.getSelectedRole() != null ? request.getSelectedRole().toUpperCase() : user.getPrimaryRole().name());
        response.setTrainee(user.isTrainee());
        response.setTrainer(user.isTrainer());
        response.setAdmin(user.isAdmin());
        response.setToken("cc_jwt_token_" + user.getId() + "_" + System.currentTimeMillis());
        response.setMessage("Authentication successful");

        return response;
    }
}
