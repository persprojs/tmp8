export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3003';
export const USE_API_PREFIX = (import.meta.env.VITE_USE_API_PREFIX || 'false') === 'true';

let API_URL = API_BASE_URL;
console.log('API_BASE_URL from env:', API_BASE_URL);
console.log('USE_API_PREFIX from env:', USE_API_PREFIX);
if (USE_API_PREFIX) {
  API_URL = `${API_BASE_URL}/api`;
}

export const API_URL_FINAL = API_URL;

console.log('Frontend config loaded:', API_URL_FINAL);
