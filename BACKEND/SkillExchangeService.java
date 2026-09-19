package com.capacityconnect.service;

import com.capacityconnect.dto.AllDtos.*;
import com.capacityconnect.model.*;
import com.capacityconnect.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SkillExchangeService {

    @Autowired
    private SkillExchangeRepository skillExchangeRepository;

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    @Autowired
    private UserRepository userRepository;

    public SkillExchangeRequest createRequest(SkillExchangeCreateRequest req) {
        User trainee = userRepository.findById(req.getTraineeId())
                .orElseThrow(() -> new RuntimeException("Trainee not found"));
        User trainer = userRepository.findById(req.getTrainerId())
                .orElseThrow(() -> new RuntimeException("Trainer not found"));

        SkillExchangeRequest exchange = SkillExchangeRequest.builder()
                .trainee(trainee)
                .trainer(trainer)
                .skillWanted(req.getSkillWanted())
                .skillOffered(req.getSkillOffered())
                .message(req.getMessage())
                .status(SkillExchangeRequest.ExchangeStatus.PENDING)
                .build();

        return skillExchangeRepository.save(exchange);
    }

    public SkillExchangeRequest updateStatus(Long requestId, String statusStr) {
        SkillExchangeRequest exchange = skillExchangeRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Exchange request not found: " + requestId));
        exchange.setStatus(SkillExchangeRequest.ExchangeStatus.valueOf(statusStr.toUpperCase()));
        return skillExchangeRepository.save(exchange);
    }

    public ChatMessage sendMessage(ChatSendMessageRequest req) {
        SkillExchangeRequest exchange = skillExchangeRepository.findById(req.getExchangeRequestId())
                .orElseThrow(() -> new RuntimeException("Exchange not found"));
        User sender = userRepository.findById(req.getSenderId())
                .orElseThrow(() -> new RuntimeException("Sender not found"));
        User receiver = userRepository.findById(req.getReceiverId())
                .orElseThrow(() -> new RuntimeException("Receiver not found"));

        ChatMessage message = ChatMessage.builder()
                .exchangeRequest(exchange)
                .sender(sender)
                .receiver(receiver)
                .messageContent(req.getMessage())
                .build();

        return chatMessageRepository.save(message);
    }

    public List<ChatMessage> getMessages(Long exchangeRequestId) {
        return chatMessageRepository.findByExchangeRequestIdOrderBySentAtAsc(exchangeRequestId);
    }
}
