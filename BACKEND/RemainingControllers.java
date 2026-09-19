package com.capacityconnect.controller;

import com.capacityconnect.dto.AllDtos.*;
import com.capacityconnect.model.*;
import com.capacityconnect.repository.*;
import com.capacityconnect.service.AiLearningAssistantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "*")
class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses() {
        return ResponseEntity.ok(courseRepository.findByIsApprovedTrue());
    }

    @PostMapping
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        return ResponseEntity.ok(courseRepository.save(course));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        courseRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

@RestController
@RequestMapping("/knowledge-hub")
@CrossOrigin(origins = "*")
class KnowledgeHubController {

    @Autowired
    private KnowledgeResourceRepository resourceRepository;

    @GetMapping
    public ResponseEntity<List<KnowledgeResource>> getAllResources() {
        return ResponseEntity.ok(resourceRepository.findByIsApprovedTrue());
    }

    @PostMapping
    public ResponseEntity<KnowledgeResource> uploadResource(@RequestBody KnowledgeResource res) {
        return ResponseEntity.ok(resourceRepository.save(res));
    }
}

@RestController
@RequestMapping("/ai")
@CrossOrigin(origins = "*")
class AiAssistantController {

    @Autowired
    private AiLearningAssistantService aiService;

    @PostMapping("/query")
    public ResponseEntity<AiPromptResponse> askAi(@RequestBody AiPromptRequest req) {
        return ResponseEntity.ok(aiService.generateResponse(req));
    }
}
