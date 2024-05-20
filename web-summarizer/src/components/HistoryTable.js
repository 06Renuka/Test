import React from 'react';

const HistoryTable = ({ history }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Summary</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item) => (
          <tr key={item.id}>
            <td>{item.url}</td>
            <td>{item.summary}</td>
            <td>{new Date(item.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HistoryTable;