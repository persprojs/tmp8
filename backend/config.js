require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local',
});

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  API_PREFIX: process.env.API_PREFIX || '/api',
  PORT: process.env.PORT || 3003,
};
