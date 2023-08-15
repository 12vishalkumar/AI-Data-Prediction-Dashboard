import React from 'react';

const ChartComponent = ({ data }) => {
  const maxYValue = Math.max(...data.map(entry => Math.max(entry.prediction, entry.actual))) + 10;

  return (
    <div className="chart-component">
      <h3>Model Predictions vs. Actual Results</h3>
      <div className="chart">
        {data.map((entry, index) => (
          <div
            className="chart-bar"
            key={index}
            style={{
              height: `${(entry.prediction / maxYValue) * 100}%`,
              backgroundColor: '#8884d8',
            }}
          ></div>
        ))}&nbsp;
        {data.map((entry, index) => (
          <div
            className="chart-bar"
            key={index}
            style={{
              height: `${(entry.actual / maxYValue) * 100}%`,
              backgroundColor: '#82ca9d',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ChartComponent;