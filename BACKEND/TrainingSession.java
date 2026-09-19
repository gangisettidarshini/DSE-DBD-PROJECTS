package com.capacityconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "training_sessions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TrainingSession {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "trainer_id", nullable = false)
    private User trainer;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "trainee_id")
    private User trainee;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(nullable = false, length = 150)
    private String topic;

    @Column(nullable = false)
    private LocalDate sessionDate;

    @Column(nullable = false)
    private LocalTime startTime;

    @Column(nullable = false)
    private LocalTime endTime;

    private String meetingLink;

    @Enumerated(EnumType.STRING)
    private SessionType sessionType;

    @Enumerated(EnumType.STRING)
    private SessionStatus status;

    @PrePersist
    protected void onCreate() {
        if (meetingLink == null) meetingLink = "https://meet.capacityconnect.internal/session";
        if (sessionType == null) sessionType = SessionType.ONE_ON_ONE;
        if (status == null) status = SessionStatus.SCHEDULED;
    }

    public enum SessionType {
        ONE_ON_ONE, GROUP, WORKSHOP
    }

    public enum SessionStatus {
        SCHEDULED, COMPLETED, CANCELLED
    }
}
