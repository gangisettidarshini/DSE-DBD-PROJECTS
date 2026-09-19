package com.capacityconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "knowledge_resources")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class KnowledgeResource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ResourceCategory category;

    @Column(nullable = false)
    private String fileName;

    @Column(nullable = false, length = 500)
    private String fileUrl;

    private String fileType;
    private Double fileSizeMb;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "uploaded_by", nullable = false)
    private User uploadedBy;

    private boolean isApproved;
    private Integer downloadCount;
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        if (fileType == null) fileType = "PDF";
        if (fileSizeMb == null) fileSizeMb = 3.5;
        if (downloadCount == null) downloadCount = 0;
        isApproved = true;
    }

    public enum ResourceCategory {
        ALL_SKILLS, AI_ML, PROGRAMMING, DATA_SCIENCE, MANAGEMENT, OTHER
    }
}
