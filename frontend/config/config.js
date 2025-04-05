const isProduction = import.meta.env.PROD; // Vite automatically sets this
let API_BASE_URL = isProduction 
  ? import.meta.env.VITE_API_BASE_URL 
  : 'http://localhost:3003';
let API_URL = 'http://localhost:3003/api';
API_BASE_URL = 'http://localhost:3003';
if (!isProduction) {
  console.log('Running in development mode');
  API_BASE_URL = 'http://localhost:3003';
  API_URL = 'http://localhost:3003/api';
} else {
  console.log('Running in production mode');
  API_BASE_URL = 'https://tmp8-projects.onrender.com';
  API_URL = 'https://tmp8-projects.onrender.com/api';
}

// Debug logs (remove in production if desired)
console.log(`Environment: ${isProduction ? 'Production' : 'Development'}`);
console.log(`API_BASE_URL: ${API_BASE_URL}`);
console.log(`API_URL: ${API_URL}`);
export {API_URL, API_BASE_URL};