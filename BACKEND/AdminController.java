package com.capacityconnect.controller;

import com.capacityconnect.model.*;
import com.capacityconnect.repository.*;
import com.capacityconnect.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CompetencyRepository competencyRepository;

    @Autowired
    private AiInsightRepository aiInsightRepository;

    @Autowired
    private AssessmentSubmissionRepository submissionRepository;

    @Autowired
    private CertificateRepository certificateRepository;

    @GetMapping("/overview")
    public ResponseEntity<Map<String, Object>> getOverview() {
        return ResponseEntity.ok(adminService.getOrganizationOverview());
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PutMapping("/users/{id}/approve")
    public ResponseEntity<User> approveUser(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.approveUser(id));
    }

    @PutMapping("/users/{id}/toggle-status")
    public ResponseEntity<User> toggleUserStatus(@PathVariable Long id) {
        return ResponseEntity.ok(adminService.toggleUserStatus(id));
    }

    @GetMapping("/competencies")
    public ResponseEntity<List<Competency>> getCompetencies() {
        return ResponseEntity.ok(competencyRepository.findAll());
    }

    @PostMapping("/competencies")
    public ResponseEntity<Competency> createCompetency(@RequestBody Competency competency) {
        return ResponseEntity.ok(competencyRepository.save(competency));
    }

    @GetMapping("/ai-insights")
    public ResponseEntity<List<AiInsight>> getAiInsights() {
        return ResponseEntity.ok(aiInsightRepository.findAll());
    }

    @GetMapping("/certificates")
    public ResponseEntity<List<Certificate>> getAllCertificates() {
        return ResponseEntity.ok(certificateRepository.findAll());
    }

    @GetMapping("/submissions")
    public ResponseEntity<List<AssessmentSubmission>> getAllSubmissions() {
        return ResponseEntity.ok(submissionRepository.findAll());
    }
}
