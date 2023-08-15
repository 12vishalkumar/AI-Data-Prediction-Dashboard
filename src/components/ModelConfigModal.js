import React, { useState } from 'react';

const ModelConfigModal = ({ isOpen, onClose, onSave, initialConfig }) => {
  const [config, setConfig] = useState(initialConfig);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Model Configuration</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Threshold:
            <input
              type="number"
              name="threshold"
              value={config.threshold}
              onChange={handleInputChange}
            />
          </label>
          {/* Add more input fields for configuration options */}
          <button onClick={() => onSave(config)}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ModelConfigModal;