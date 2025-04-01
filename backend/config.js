require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  MONGODB_URI: isProduction 
    ? process.env.MONGODB_URI 
    : process.env.MONGODB_URI || 'mongodb://localhost:27017/tmp8',
  PORT: process.env.PORT || 3003,
  FRONTEND_URL: isProduction
    ? 'https://tmp8-frontend.vercel.app'
    : 'http://localhost:5173',
  API_PREFIX: '/api',
  ALLOWED_ORIGINS: isProduction
    ? ['https://tmp8-frontend.vercel.app']
    : ['http://localhost:5173']
};

console.log('Config loaded:', config);

module.exports = config;