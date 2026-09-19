package com.capacityconnect.service;

import com.capacityconnect.dto.AllDtos.*;
import org.springframework.stereotype.Service;

@Service
public class AiLearningAssistantService {

    public AiPromptResponse generateResponse(AiPromptRequest req) {
        String query = req.getQuery() != null ? req.getQuery().toLowerCase() : "";
        String role = req.getContextRole() != null ? req.getContextRole().toUpperCase() : "TRAINEE";

        AiPromptResponse resp = new AiPromptResponse();

        if (query.contains("skill gap") || query.contains("gap") || query.contains("severity")) {
            resp.setCategory("SKILL_GAP_ANALYSIS");
            resp.setReply("Based on your latest assessment and curriculum activity, your primary identified skill gap is **Distributed Systems & Event-Driven Architecture** (High Severity). Recommended action: Complete the 'Enterprise Java & Spring Boot Masterclass' Module 4 and request a peer exchange session with Dr. Aris Vance.");
            resp.setSuggestedNextStep("Enroll in Microservices module or schedule a 1-on-1 session with a certified trainer.");
        } else if (query.contains("resource") || query.contains("recommend") || query.contains("book") || query.contains("pdf")) {
            resp.setCategory("RESOURCE_RECOMMENDATION");
            resp.setReply("I recommend the following curated Knowledge Hub assets:\n1. **Spring Boot 3.x Production Blueprint & Checklist** (PDF - 3.8MB)\n2. **Transformers, RAG & Vector Embeddings Architecture Guide** (PDF - 6.2MB)\n3. **MySQL 8.0 Query Optimization & Indexing Playbook** (PDF - 2.4MB)");
            resp.setSuggestedNextStep("Visit the Knowledge Hub to download these resources directly.");
        } else if (query.contains("schedule") || query.contains("calendar") || query.contains("appointment")) {
            resp.setCategory("SCHEDULING_ASSISTANCE");
            resp.setReply("You have an upcoming training session with **Dr. Aris Vance** on 'Spring Boot REST & JPA Deep Dive' scheduled for this Thursday at 2:00 PM UTC. Your meeting link is ready in the Schedule Dashboard.");
            resp.setSuggestedNextStep("Open the Schedule tab to sync or reschedule.");
        } else if (query.contains("career") || query.contains("readiness") || query.contains("progress")) {
            resp.setCategory("CAREER_READINESS");
            resp.setReply("Your current **Career Readiness Score is 78%**. To reach 90% (Industry Expert benchmark), earn 1 more certificate in Cloud-Native Architecture and complete 2 peer skill exchanges.");
            resp.setSuggestedNextStep("Take the Cloud Infrastructure & Kubernetes assessment.");
        } else {
            resp.setCategory("GENERAL_GUIDANCE");
            resp.setReply("CAPACITY CONNECT AI Learning Assistant is ready to help you level up! You can ask me to analyze your skill gaps, recommend tailored learning paths, suggest top peer trainers for skill exchange, or prepare you for upcoming assessments.");
            resp.setSuggestedNextStep("Try asking: 'What are my top skill gaps?' or 'Recommend resources for Spring Boot'.");
        }

        return resp;
    }
}
