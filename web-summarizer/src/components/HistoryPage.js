// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { getHistory } from './api'

// const HistoryPage = () => {
//     const [history, setHistory] = useState([]);

//     useEffect(() => {
//         const fetchHistory = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/history');
//                 setHistory(response.data.history);
//             } catch (error) {
//                 console.error('Error fetching history:', error);
//             }
//         };

//         fetchHistory();
//     }, []);

//     return (
//         <div>
//             <h1>Request History</h1>
//             <ul>
//                 {history.map((entry, index) => (
//                     <li key={index}>{entry.url} - {entry.summary}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default HistoryPage;
import React, { useEffect, useState } from 'react';
import { getHistory } from './api'; // Import your API function
import HistoryTable from './HistoryTable';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const historyData = await getHistory();
        setHistory(historyData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>History</h1>
      {history.length === 0 ? (
        <p>No history found.</p>
      ) : (

        <HistoryTable history={history} />
        
      )}
      {/* <ul>
          {history.map((item) => (
            <li key={item.id}>
              <p><strong>URL:</strong> {item.url}</p>
              <p><strong>Summary:</strong> {item.summary}</p>
              <p><strong>Timestamp:</strong> {new Date(item.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul> */}
    </div>
  );
};

export default HistoryPage;

