const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3003';
const USE_API_PREFIX = import.meta.env.VITE_USE_API_PREFIX || '';

console.log('API_BASE_URL from env:', API_BASE_URL);
console.log('USE_API_PREFIX from env:', USE_API_PREFIX);

const API_URL = `${API_BASE_URL}${USE_API_PREFIX}`;
console.log('Frontend config loaded:', API_URL);

export { API_URL };