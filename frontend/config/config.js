// src/config/config.js
//export const API_BASE_URL = "http://localhost:3003"; // Hardcode for now
// Should already work if you have:
export const API_BASE_URL = process.env.REACT_APP_API_URL + '/api'; 