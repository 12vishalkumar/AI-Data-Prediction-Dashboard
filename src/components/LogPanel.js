// import React, { useState } from 'react';

// const LogPanel = () => {
//   const [logs, setLogs] = useState([]);

//   // Function to add a new log entry
//   const addLog = (message) => {
//     setLogs((prevLogs) => [...prevLogs, message]);
//   };

//   return (
//     <div className="log-panel">
//       <h3 className="log-title">Logs</h3>
//       <ul className="log-list">
//         {logs.map((log, index) => (
//           <li key={index} className="log-item">
//             {log}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LogPanel;



import React, { useState } from 'react';

const LogPanel = () => {
  const [logs, setLogs] = useState([]);

  const addLog = (message, type = 'info') => {
    const newLog = { message, type };
    setLogs((prevLogs) => [...prevLogs, newLog]);
  };

  return (
    <div className="log-panel">
      <h2>Log Panel</h2>
      <div className="logs">
        {logs.map((log, index) => (
          <div key={index} className={`log-item ${log.type}`}>
            {log.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogPanel;