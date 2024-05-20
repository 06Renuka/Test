import React, { useState } from 'react';
import axios from 'axios';

const SummarizePage = () => {
    const [url, setUrl] = useState('');
    const [summary, setSummary] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/summarize', { url });
            setSummary(response.data.summary);
        } catch (error) {
            console.error('Error summarizing the website:', error);
        }
    };
    // const showsummary = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.get('http://localhost:8080/api/summarize', { url });
    //         setSummary(response.data.summary);
    //     } catch (error) {
    //         console.error('Error summarizing the website:', error);
    //     }
    // };

    return (
        <div>
            <h1>Summarize Website</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter website URL"
                />
                <button type="submit">Summarize</button>
            </form>
            {summary && (
                <div>
                    <h2>Summary:</h2>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
};

export default SummarizePage;
