package com.capacityconnect.dto;

import lombok.Data;
import java.util.Map;

public class AllDtos {

    @Data
    public static class AuthRequest {
        private String email;
        private String password;
        private String fullName;
        private String selectedRole; // "TRAINEE", "TRAINER", "ADMIN"
        private boolean isGoogleAuth;
    }

    @Data
    public static class AuthResponse {
        private Long id;
        private String fullName;
        private String email;
        private String avatarUrl;
        private String activeRole; // "TRAINEE", "TRAINER", "ADMIN"
        private boolean isTrainee;
        private boolean isTrainer;
        private boolean isAdmin;
        private String token;
        private String message;
    }

    @Data
    public static class AssessmentSubmitRequest {
        private Long assessmentId;
        private Long traineeId;
        private Map<Long, String> answers; // QuestionId -> Selected Option ("A", "B", "C", "D")
    }

    @Data
    public static class AssessmentResultResponse {
        private Long submissionId;
        private Long assessmentId;
        private String assessmentTitle;
        private int scoreObtained;
        private int totalMarks;
        private double percentage;
        private boolean isPassed;
        private String aiEvaluationSummary;
        private String aiImprovementTips;
    }

    @Data
    public static class SkillExchangeCreateRequest {
        private Long traineeId;
        private Long trainerId;
        private String skillWanted;
        private String skillOffered;
        private String message;
    }

    @Data
    public static class ChatSendMessageRequest {
        private Long exchangeRequestId;
        private Long senderId;
        private Long receiverId;
        private String message;
    }

    @Data
    public static class AiPromptRequest {
        private String query;
        private String contextRole; // TRAINEE, TRAINER, ADMIN
        private Long userId;
    }

    @Data
    public static class AiPromptResponse {
        private String reply;
        private String category;
        private String suggestedNextStep;
    }
}
