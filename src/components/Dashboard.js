import React, { useState } from 'react';
import ModelConfigModal from './ModelConfigModal.js';
import LogPanel from './LogPanel';
import DataTable from './DataTable.js';
import MetricsComponent from './MetricsComponent.js';
import ChartComponent from './ChartComponent.js';


const Dashboard = () => {
  const [modelRunning, setModelRunning] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [modelConfig, setModelConfig] = useState({ threshold: 0.5 });
  const [data, setData] = useState([
    { date: '2023-08-14', prediction: 4.6, actual: 6.58 },
    { date: '2023-08-15', prediction: 6.7, actual: 9.72 },
    { date: '2023-08-16', prediction: 1.7, actual: 4.70 },
    { date: '2023-08-17', prediction: 7.7, actual: 7.62 },
    { date: '2023-08-18', prediction: 2.7, actual: 1.60 },
    { date: '2023-08-19', prediction: 6.7, actual: 5.74 },
    { date: '2023-08-20', prediction: 3.7, actual: 3.76 },
    { date: '2023-08-21', prediction: 8.7, actual: 9.92 },
    { date: '2023-08-22', prediction: 5.7, actual: 1.72 },
    { date: '2023-08-23', prediction: 9.7, actual: 4.52 },
    // Add more data entries if required
  ]);

  const toggleModel = () => {
    setModelRunning(!modelRunning);
  };

  const openConfigModal = () => {
    setIsConfigModalOpen(true);
  };

  const closeConfigModal = () => {
    setIsConfigModalOpen(false);
  };

  const saveModelConfig = (newConfig) => {
    setModelConfig(newConfig);
    closeConfigModal();
  };



  const clearData = () => {
    setData([]);
  };

  const addTestData = () => {
    const newTestData = [
      { date: '2023-08-19', prediction: 6.7, actual: 5.74 },
      { date: '2023-08-20', prediction: 3.7, actual: 3.76 },
      { date: '2023-08-21', prediction: 8.7, actual: 9.92 },
      { date: '2023-08-22', prediction: 5.7, actual: 1.72 },
      { date: '2023-08-23', prediction: 9.7, actual: 4.52 },
      // Add more test data entries OR You can add here form tem you can add the data theough the user input "RIGHT"
    ];
    setData([...data, ...newTestData]);
  };



  return (
    <div className="dashboard">
      <div className="metrics">
        {/* You can also add here as metric which you want to show for user. */}
        <MetricsComponent data = {data}/>
      </div>

      <div className="visualization">
        {/* Display charts and visualizations data here which kind of vdata you want to visulize then specify here*/}
        <ChartComponent data = {data}/>
      </div>

      <div className="controls"><h3>BUTTONS</h3>
        <button onClick={toggleModel}>
          {modelRunning ? 'Stop Model' : 'Start Model'}
        </button>

        <button onClick={openConfigModal} className="config-button">Configure Model</button>
        <button onClick={clearData} className="control-button">Clear Data</button>
        <button onClick={addTestData} className="control-button">Add Test Data</button>

        {/* Add more controls as needed as you you want anything like delete data add data which are you need here*/}

      </div>

      <ModelConfigModal  
        isOpen={isConfigModalOpen}
        onClose={closeConfigModal}
        onSave={saveModelConfig}
        initialConfig={modelConfig}
      />

      <LogPanel />
      <DataTable data={data} />
    </div>
  );
};

export default Dashboard;

