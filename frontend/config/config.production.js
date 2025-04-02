const isProduction = true; // Set for production
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3003';

export const API_URL = `${API_BASE_URL}/api`;

// Debug logs (remove in production if desired)
console.log(`Environment: Production`);
console.log(`API_BASE_URL: ${API_BASE_URL}`);
console.log(`API_URL: ${API_URL}`);
