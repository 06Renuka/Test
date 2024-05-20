package com.example.summarizer.services;

import com.example.summarizer.model.SummarizationRequest;
import com.example.summarizer.repository.SummarizationRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.time.LocalDateTime;
import java.util.Scanner;

@Service
public class LLMSummarizationService implements SummarizationService {

    @Autowired
    private SummarizationRequestRepository repository;

    @Override
    public String summarize(String urlString) {
        String summary;
        HttpURLConnection conn = null;
        BufferedReader reader = null;
        try {
            URI uri = new URI(urlString);
            URL url = uri.toURL();
             conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            
            int responseCode = conn.getResponseCode();
            if (responseCode != HttpURLConnection.HTTP_OK) {
                throw new RuntimeException("Failed : HTTP error code : " + responseCode);
            }

//            
         // Read the content
            reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            StringBuilder content = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                content.append(line);
            }

            summary = content.length() > 10 ? content.substring(0, 10) + "..." : content.toString();
        } catch (Exception e) {
            e.printStackTrace();
            summary = "Failed to summarize the URL.";
        }
        finally {
            // Close the connections
            if (reader != null) {
                try {
                    reader.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            if (conn != null) {
                conn.disconnect();
            }
        }

        

        SummarizationRequest request = new SummarizationRequest();
        request.setUrl(urlString);
        request.setSummary(summary);
        request.setTimestamp(LocalDateTime.now());
        repository.save(request);

        return summary;
    }
}
