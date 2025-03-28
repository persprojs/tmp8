const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3003,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://sunilganotra:desiPwd1@cluster0-shard-00-00.mongodb.net:27017,cluster0-shard-00-01.mongodb.net:27017,cluster0-shard-00-02.mongodb.net:27017/ecommerce?ssl=true&replicaSet=atlas-xxxx-shard-0&authSource=admin&retryWrites=true&w=majority',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:3003',
};
