package com.capacityconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String fullName;

    @Column(nullable = false, unique = true, length = 150)
    private String email;

    @Column(nullable = false)
    private String passwordHash;

    @Column(length = 500)
    private String avatarUrl;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PrimaryRole primaryRole;

    @Column(nullable = false)
    private boolean isTrainee;

    @Column(nullable = false)
    private boolean isTrainer;

    @Column(nullable = false)
    private boolean isAdmin;

    @Column(nullable = false)
    private boolean isApproved;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AccountStatus accountStatus;

    @Enumerated(EnumType.STRING)
    private AuthProvider authProvider;

    private String googleId;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
        if (avatarUrl == null) {
            avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150";
        }
        if (accountStatus == null) {
            accountStatus = AccountStatus.ACTIVE;
        }
        if (authProvider == null) {
            authProvider = AuthProvider.LOCAL;
        }
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public enum PrimaryRole {
        TRAINEE, TRAINER, ADMIN
    }

    public enum AccountStatus {
        ACTIVE, PENDING, SUSPENDED
    }

    public enum AuthProvider {
        LOCAL, GOOGLE
    }
}
