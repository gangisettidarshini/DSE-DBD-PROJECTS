package com.capacityconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "assessment_submissions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AssessmentSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "assessment_id", nullable = false)
    private Assessment assessment;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "trainee_id", nullable = false)
    private User trainee;

    private Integer scoreObtained;
    private Integer totalMarks;
    private Double percentage;

    @Enumerated(EnumType.STRING)
    private SubmissionStatus status;

    @Column(columnDefinition = "TEXT")
    private String aiEvaluationSummary;

    @Column(columnDefinition = "TEXT")
    private String aiImprovementTips;

    private LocalDateTime submittedAt;

    @PrePersist
    protected void onCreate() {
        submittedAt = LocalDateTime.now();
        if (status == null) status = SubmissionStatus.EVALUATED;
    }

    public enum SubmissionStatus {
        SUBMITTED, EVALUATED, PASSED, FAILED
    }
}
