package com.capacityconnect.service;

import com.capacityconnect.model.User;
import com.capacityconnect.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private AssessmentSubmissionRepository submissionRepository;

    @Autowired
    private CertificateRepository certificateRepository;

    @Autowired
    private TrainingSessionRepository trainingSessionRepository;

    public Map<String, Object> getOrganizationOverview() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalUsers", userRepository.count());
        stats.put("totalTrainees", userRepository.countByIsTraineeTrue());
        stats.put("totalTrainers", userRepository.countByIsTrainerTrue());
        stats.put("totalAdmins", userRepository.countByIsAdminTrue());
        stats.put("activeCourses", courseRepository.count());
        stats.put("trainingSessions", trainingSessionRepository.count());
        stats.put("certificationsIssued", certificateRepository.count());
        stats.put("assessmentsEvaluated", submissionRepository.count());
        return stats;
    }

    public User approveUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));
        user.setApproved(true);
        user.setAccountStatus(User.AccountStatus.ACTIVE);
        return userRepository.save(user);
    }

    public User toggleUserStatus(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found: " + userId));
        if (user.getAccountStatus() == User.AccountStatus.ACTIVE) {
            user.setAccountStatus(User.AccountStatus.SUSPENDED);
        } else {
            user.setAccountStatus(User.AccountStatus.ACTIVE);
        }
        return userRepository.save(user);
    }
}
