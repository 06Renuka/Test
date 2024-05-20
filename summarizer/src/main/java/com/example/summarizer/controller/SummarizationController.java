package com.example.summarizer.controller;


import com.example.summarizer.model.SummarizationRequest;
import com.example.summarizer.services.SummarizationService;
import com.example.summarizer.repository.SummarizationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class SummarizationController {

    @Autowired
    private SummarizationService summarizationService;

    @Autowired
    private SummarizationRequestRepository repository;

    @PostMapping("/summarize")
    public ResponseEntity<String> summarize(@RequestBody String url) {
        String summary = summarizationService.summarize(url);
        return ResponseEntity.ok(summary);
    }

    @GetMapping("/history")
    public ResponseEntity<List<SummarizationRequest>> getHistory() {
        List<SummarizationRequest> history = repository.findAll();
        return ResponseEntity.ok(history);
    }
}
