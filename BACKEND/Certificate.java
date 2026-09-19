package com.capacityconnect.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "certificates")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String certificateCode;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "trainee_id", nullable = false)
    private User trainee;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "course_id")
    private Course course;

    @Column(nullable = false, length = 200)
    private String title;

    private String grade;
    private LocalDate issueDate;
    private String verificationUrl;

    @PrePersist
    protected void onCreate() {
        if (issueDate == null) issueDate = LocalDate.now();
        if (verificationUrl == null) verificationUrl = "https://capacityconnect.org/verify/" + certificateCode;
    }
}
