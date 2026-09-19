package com.capacityconnect.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "competencies")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Competency {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String name;

    @Column(nullable = false, length = 100)
    private String category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RequiredLevel requiredLevel;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false, length = 150)
    private String mappedRole;

    @Enumerated(EnumType.STRING)
    private OrgGapSeverity orgGapSeverity;

    @PrePersist
    protected void onCreate() {
        if (orgGapSeverity == null) orgGapSeverity = OrgGapSeverity.MEDIUM;
    }

    public enum RequiredLevel {
        LEVEL_1_FOUNDATIONAL, LEVEL_2_INTERMEDIATE, LEVEL_3_ADVANCED, LEVEL_4_EXPERT
    }

    public enum OrgGapSeverity {
        LOW, MEDIUM, HIGH
    }
}
