package com.capacityconnect.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "user_profiles")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProfile {

    @Id
    private Long userId;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    @Column(columnDefinition = "TEXT")
    private String bio;

    private String expertise;
    private String qualifications;
    private Integer experienceYears;
    private String department;
    private Double performanceRating;
    private Integer careerReadinessScore;
    private Integer learningStreakDays;
    private Integer xpPoints;
    private Integer currentLevel;
    private Integer totalCompletedCourses;
}
