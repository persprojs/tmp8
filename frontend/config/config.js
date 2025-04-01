const isProduction = import.meta.env.VITE_NODE_ENV === 'production';

export const API_BASE_URL = isProduction 
  ? import.meta.env.VITE_API_BASE_URL_PROD 
  : import.meta.env.VITE_API_BASE_URL_LOCAL;

export const API_URL = `${API_BASE_URL}/api`;

console.log('Environment:', isProduction ? 'Production' : 'Development');
console.log('API_BASE_URL:', API_BASE_URL);
console.log('API_URL:', API_URL);

export default {
  API_BASE_URL,
  API_URL
};