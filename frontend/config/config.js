const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${API_BASE_URL}/api`;

// Debug logs
console.group('Environment Configuration');
console.log('Mode:', import.meta.env.MODE);
console.log('API_BASE_URL:', API_BASE_URL);
console.log('API_URL:', API_URL);
console.groupEnd();

export { API_BASE_URL, API_URL };