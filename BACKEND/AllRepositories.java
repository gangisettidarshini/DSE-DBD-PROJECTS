package com.capacityconnect.repository;

import com.capacityconnect.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByIsApprovedTrue();
    List<Course> findByTrainerId(Long trainerId);
    List<Course> findByCategoryIgnoreCase(String category);
}

@Repository
interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
}

@Repository
interface CourseEnrollmentRepository extends JpaRepository<CourseEnrollment, Long> {
    List<CourseEnrollment> findByTraineeId(Long traineeId);
    Optional<CourseEnrollment> findByCourseIdAndTraineeId(Long courseId, Long traineeId);
    long countByCourseId(Long courseId);
}

@Repository
interface AssessmentRepository extends JpaRepository<Assessment, Long> {
    List<Assessment> findByTrainerId(Long trainerId);
    List<Assessment> findByIsActiveTrue();
    List<Assessment> findByCourseId(Long courseId);
}

@Repository
interface AssessmentQuestionRepository extends JpaRepository<AssessmentQuestion, Long> {
    List<AssessmentQuestion> findByAssessmentId(Long assessmentId);
}

@Repository
interface AssessmentSubmissionRepository extends JpaRepository<AssessmentSubmission, Long> {
    List<AssessmentSubmission> findByTraineeIdOrderBySubmittedAtDesc(Long traineeId);
    List<AssessmentSubmission> findByAssessmentTrainerIdOrderBySubmittedAtDesc(Long trainerId);
    Optional<AssessmentSubmission> findByAssessmentIdAndTraineeId(Long assessmentId, Long traineeId);
    long countByStatus(AssessmentSubmission.SubmissionStatus status);
}

@Repository
interface SkillExchangeRepository extends JpaRepository<SkillExchangeRequest, Long> {
    List<SkillExchangeRequest> findByTrainerIdOrderByCreatedAtDesc(Long trainerId);
    List<SkillExchangeRequest> findByTraineeIdOrderByCreatedAtDesc(Long traineeId);
    List<SkillExchangeRequest> findByTrainerIdAndStatus(Long trainerId, SkillExchangeRequest.ExchangeStatus status);
}

@Repository
interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findByExchangeRequestIdOrderBySentAtAsc(Long exchangeRequestId);
}

@Repository
interface TrainingSessionRepository extends JpaRepository<TrainingSession, Long> {
    List<TrainingSession> findByTrainerId(Long trainerId);
    List<TrainingSession> findByTraineeId(Long traineeId);
    List<TrainingSession> findBySessionDate(LocalDate sessionDate);
}

@Repository
interface CompetencyRepository extends JpaRepository<Competency, Long> {
}

@Repository
interface KnowledgeResourceRepository extends JpaRepository<KnowledgeResource, Long> {
    List<KnowledgeResource> findByIsApprovedTrue();
    List<KnowledgeResource> findByCategory(KnowledgeResource.ResourceCategory category);
}

@Repository
interface CertificateRepository extends JpaRepository<Certificate, Long> {
    List<Certificate> findByTraineeId(Long traineeId);
    Optional<Certificate> findByCertificateCode(String certificateCode);
}

@Repository
interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUserIdOrderByCreatedAtDesc(Long userId);
}

@Repository
interface AiInsightRepository extends JpaRepository<AiInsight, Long> {
}
