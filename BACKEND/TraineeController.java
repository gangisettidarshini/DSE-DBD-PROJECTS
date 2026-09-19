package com.capacityconnect.controller;

import com.capacityconnect.model.*;
import com.capacityconnect.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/trainees")
@CrossOrigin(origins = "*")
public class TraineeController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseEnrollmentRepository enrollmentRepository;

    @Autowired
    private AssessmentSubmissionRepository submissionRepository;

    @Autowired
    private CertificateRepository certificateRepository;

    @Autowired
    private TrainingSessionRepository sessionRepository;

    @GetMapping("/{id}/enrollments")
    public ResponseEntity<List<CourseEnrollment>> getEnrollments(@PathVariable Long id) {
        return ResponseEntity.ok(enrollmentRepository.findByTraineeId(id));
    }

    @GetMapping("/{id}/submissions")
    public ResponseEntity<List<AssessmentSubmission>> getSubmissions(@PathVariable Long id) {
        return ResponseEntity.ok(submissionRepository.findByTraineeIdOrderBySubmittedAtDesc(id));
    }

    @GetMapping("/{id}/certificates")
    public ResponseEntity<List<Certificate>> getCertificates(@PathVariable Long id) {
        return ResponseEntity.ok(certificateRepository.findByTraineeId(id));
    }

    @GetMapping("/{id}/sessions")
    public ResponseEntity<List<TrainingSession>> getSessions(@PathVariable Long id) {
        return ResponseEntity.ok(sessionRepository.findByTraineeId(id));
    }
}
