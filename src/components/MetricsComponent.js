import React from 'react';

const MetricsComponent = ({ data }) => {
  const calculateMetrics = () => {
    const totalEntries = data.length;
    const totalPredictions = data.reduce((sum, entry) => sum + entry.prediction, 0);
    const totalActuals = data.reduce((sum, entry) => sum + entry.actual, 0);
    const averagePrediction = totalPredictions / totalEntries;
    const averageActual = totalActuals / totalEntries;

    return {
      totalEntries,
      averagePrediction,
      averageActual,
    };
  };

  const metrics = calculateMetrics();

  return (
    <div className="metrics-component">
      <h3>Key Performance Metrics</h3>
      <p>Total Entries: {metrics.totalEntries}</p><br/>
      <p>Average Prediction: {metrics.averagePrediction.toFixed(2)}</p><br/>
      <p>Average Actual: {metrics.averageActual.toFixed(2)}</p><br/>
      {/* Add more metrics as needed which are you needs */}
    </div>
  );
};

export default MetricsComponent;