
package com.example.summarizer.repository;

import com.example.summarizer.model.SummarizationRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SummarizationRequestRepository extends JpaRepository<SummarizationRequest, Long> {
}
