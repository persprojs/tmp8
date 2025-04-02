// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded

// Debug messages for initialization
console.log('Frontend Initialization:');
console.log(`Environment: ${process.env.NODE_ENV}`);
console.log(`API Base URL: ${process.env.REACT_APP_API_BASE_URL}`);
console.log('Frontend Initialization Complete');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
