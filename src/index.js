import React from 'react';
import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // You can add global styles here


// Getting root element from HTML document
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component wrapped in StrictMode component on the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

