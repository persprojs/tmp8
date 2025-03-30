export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const USE_API_PREFIX = import.meta.env.VITE_USE_API_PREFIX === 'true';

let API_URL = API_BASE_URL;

if (USE_API_PREFIX) {
  API_URL = `${API_BASE_URL}/api`;
}

export const API_URL_FINAL = API_URL;
console.log('Frontend config loaded:', API_URL_FINAL);
console.log('Frontend config loaded:', API_BASE_URL);