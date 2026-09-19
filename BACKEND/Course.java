package com.capacityconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "courses")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, length = 100)
    private String category;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "trainer_id", nullable = false)
    private User trainer;

    private Integer durationHours;
    private Integer totalLessons;

    @Column(length = 500)
    private String thumbnailUrl;

    private boolean isPublic;
    private boolean isApproved;

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        if (thumbnailUrl == null) {
            thumbnailUrl = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500";
        }
        isPublic = true;
        isApproved = true;
    }
}
