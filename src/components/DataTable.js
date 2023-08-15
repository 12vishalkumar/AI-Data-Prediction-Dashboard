import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Prediction</th>
          <th>Actual</th>
          {/* Add more table headers */}
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index} className="data-row">
            <td>{entry.date}</td>
            <td>{entry.prediction}</td>
            <td>{entry.actual}</td>
            {/* Add more table data cells */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

