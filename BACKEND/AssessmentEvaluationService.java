package com.capacityconnect.service;

import com.capacityconnect.dto.AllDtos.*;
import com.capacityconnect.model.*;
import com.capacityconnect.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Service
public class AssessmentEvaluationService {

    @Autowired
    private AssessmentRepository assessmentRepository;

    @Autowired
    private AssessmentQuestionRepository questionRepository;

    @Autowired
    private AssessmentSubmissionRepository submissionRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public AssessmentResultResponse evaluateSubmission(AssessmentSubmitRequest request) {
        Assessment assessment = assessmentRepository.findById(request.getAssessmentId())
                .orElseThrow(() -> new RuntimeException("Assessment not found: " + request.getAssessmentId()));

        User trainee = userRepository.findById(request.getTraineeId())
                .orElseThrow(() -> new RuntimeException("Trainee not found: " + request.getTraineeId()));

        List<AssessmentQuestion> questions = questionRepository.findByAssessmentId(assessment.getId());

        int scoreObtained = 0;
        int totalMarks = 0;
        int correctCount = 0;

        for (AssessmentQuestion q : questions) {
            int qMarks = (q.getMarks() != null && q.getMarks() > 0) ? q.getMarks() : 25;
            totalMarks += qMarks;

            String selectedAnswer = request.getAnswers() != null ? request.getAnswers().get(q.getId()) : null;
            if (selectedAnswer != null && selectedAnswer.trim().equalsIgnoreCase(q.getCorrectOption().trim())) {
                scoreObtained += qMarks;
                correctCount++;
            }
        }

        if (totalMarks == 0) totalMarks = 100;
        double percentage = ((double) scoreObtained / totalMarks) * 100.0;
        boolean isPassed = percentage >= (assessment.getPassingMarks() != null ? assessment.getPassingMarks() : 70);

        // Real-Time AI Feedback Generation
        String summary;
        String tips;
        if (percentage >= 90) {
            summary = "Mastery Level: Exceptional understanding of concepts. Answered " + correctCount + "/" + questions.size() + " questions correctly.";
            tips = "You are ready for advanced level architectural projects and peer mentoring!";
        } else if (percentage >= 70) {
            summary = "Proficient Level: Solid grasp of core concepts. Scored " + scoreObtained + " out of " + totalMarks + " marks.";
            tips = "Review the few missed conceptual questions and practice real-world edge cases.";
        } else {
            summary = "Needs Revision: Scored " + scoreObtained + " out of " + totalMarks + " (" + String.format("%.1f", percentage) + "%). Below passing threshold (" + assessment.getPassingMarks() + "%).";
            tips = "Ask your assigned trainer in the real-time chat for a 1-on-1 review session on fundamental concepts.";
        }

        AssessmentSubmission submission = AssessmentSubmission.builder()
                .assessment(assessment)
                .trainee(trainee)
                .scoreObtained(scoreObtained)
                .totalMarks(totalMarks)
                .percentage(percentage)
                .status(isPassed ? AssessmentSubmission.SubmissionStatus.PASSED : AssessmentSubmission.SubmissionStatus.FAILED)
                .aiEvaluationSummary(summary)
                .aiImprovementTips(tips)
                .submittedAt(LocalDateTime.now())
                .build();

        submission = submissionRepository.save(submission);

        AssessmentResultResponse response = new AssessmentResultResponse();
        response.setSubmissionId(submission.getId());
        response.setAssessmentId(assessment.getId());
        response.setAssessmentTitle(assessment.getTitle());
        response.setScoreObtained(scoreObtained);
        response.setTotalMarks(totalMarks);
        response.setPercentage(percentage);
        response.setPassed(isPassed);
        response.setAiEvaluationSummary(summary);
        response.setAiImprovementTips(tips);

        return response;
    }
}
