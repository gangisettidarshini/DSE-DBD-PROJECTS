package com.capacityconnect.controller;

import com.capacityconnect.model.*;
import com.capacityconnect.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/trainers")
@CrossOrigin(origins = "*")
public class TrainerController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Autowired
    private AssessmentSubmissionRepository submissionRepository;

    @Autowired
    private TrainingSessionRepository sessionRepository;

    @GetMapping
    public ResponseEntity<List<User>> getAllTrainers() {
        return ResponseEntity.ok(userRepository.findByIsTrainerTrue());
    }

    @GetMapping("/{id}/courses")
    public ResponseEntity<List<Course>> getTrainerCourses(@PathVariable Long id) {
        return ResponseEntity.ok(courseRepository.findByTrainerId(id));
    }

    @GetMapping("/{id}/assessments")
    public ResponseEntity<List<Assessment>> getTrainerAssessments(@PathVariable Long id) {
        return ResponseEntity.ok(assessmentRepository.findByTrainerId(id));
    }

    @GetMapping("/{id}/submissions")
    public ResponseEntity<List<AssessmentSubmission>> getTraineeSubmissionsForTrainer(@PathVariable Long id) {
        return ResponseEntity.ok(submissionRepository.findByAssessmentTrainerIdOrderBySubmittedAtDesc(id));
    }

    @GetMapping("/{id}/sessions")
    public ResponseEntity<List<TrainingSession>> getTrainerSessions(@PathVariable Long id) {
        return ResponseEntity.ok(sessionRepository.findByTrainerId(id));
    }

    @PostMapping("/{id}/sessions")
    public ResponseEntity<TrainingSession> createSession(@RequestBody TrainingSession session) {
        return ResponseEntity.ok(sessionRepository.save(session));
    }
}
