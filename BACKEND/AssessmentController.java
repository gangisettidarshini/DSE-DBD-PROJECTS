package com.capacityconnect.controller;

import com.capacityconnect.dto.AllDtos.*;
import com.capacityconnect.model.*;
import com.capacityconnect.repository.*;
import com.capacityconnect.service.AssessmentEvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/assessments")
@CrossOrigin(origins = "*")
public class AssessmentController {

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Autowired
    private AssessmentQuestionRepository questionRepository;

    @Autowired
    private AssessmentEvaluationService evaluationService;

    @GetMapping
    public ResponseEntity<List<Assessment>> getAllActiveAssessments() {
        return ResponseEntity.ok(assessmentRepository.findByIsActiveTrue());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Assessment> getAssessment(@PathVariable Long id) {
        return ResponseEntity.of(assessmentRepository.findById(id));
    }

    @GetMapping("/{id}/questions")
    public ResponseEntity<List<AssessmentQuestion>> getQuestionsForExam(@PathVariable Long id) {
        List<AssessmentQuestion> list = questionRepository.findByAssessmentId(id);
        // Note: in a production response we can sanitize or let JPA ignore secret answer keys if needed
        return ResponseEntity.ok(list);
    }

    @PostMapping
    public ResponseEntity<Assessment> createAssessment(@RequestBody Assessment assessment) {
        return ResponseEntity.ok(assessmentRepository.save(assessment));
    }

    @PostMapping("/submit")
    public ResponseEntity<AssessmentResultResponse> submitAssessment(@RequestBody AssessmentSubmitRequest request) {
        return ResponseEntity.ok(evaluationService.evaluateSubmission(request));
    }
}
