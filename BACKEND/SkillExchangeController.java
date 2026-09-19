package com.capacityconnect.controller;

import com.capacityconnect.dto.AllDtos.*;
import com.capacityconnect.model.*;
import com.capacityconnect.repository.SkillExchangeRepository;
import com.capacityconnect.service.SkillExchangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/skill-exchanges")
@CrossOrigin(origins = "*")
public class SkillExchangeController {

    @Autowired
    private SkillExchangeService skillExchangeService;

    @Autowired
    private SkillExchangeRepository skillExchangeRepository;

    @PostMapping("/request")
    public ResponseEntity<SkillExchangeRequest> createRequest(@RequestBody SkillExchangeCreateRequest req) {
        return ResponseEntity.ok(skillExchangeService.createRequest(req));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<SkillExchangeRequest> updateStatus(@PathVariable Long id, @RequestParam String status) {
        return ResponseEntity.ok(skillExchangeService.updateStatus(id, status));
    }

    @GetMapping("/trainer/{trainerId}")
    public ResponseEntity<List<SkillExchangeRequest>> getTrainerRequests(@PathVariable Long trainerId) {
        return ResponseEntity.ok(skillExchangeRepository.findByTrainerIdOrderByCreatedAtDesc(trainerId));
    }

    @GetMapping("/trainee/{traineeId}")
    public ResponseEntity<List<SkillExchangeRequest>> getTraineeRequests(@PathVariable Long traineeId) {
        return ResponseEntity.ok(skillExchangeRepository.findByTraineeIdOrderByCreatedAtDesc(traineeId));
    }

    @GetMapping("/{requestId}/messages")
    public ResponseEntity<List<ChatMessage>> getMessages(@PathVariable Long requestId) {
        return ResponseEntity.ok(skillExchangeService.getMessages(requestId));
    }

    @PostMapping("/messages")
    public ResponseEntity<ChatMessage> sendMessage(@RequestBody ChatSendMessageRequest req) {
        return ResponseEntity.ok(skillExchangeService.sendMessage(req));
    }
}
