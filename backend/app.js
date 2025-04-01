const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middleware/error');
const config = require('./config');

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'https://tmp8-frontend.vercel.app',
    'http://localhost:5173'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Handle preflight requests
app.options('*', cors());

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Route Imports
const productRoutes = require('./routes/productRoutes');

// API Routes - Note the consistent /api prefix
app.use('/api', productRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'API is working',
    environment: process.env.NODE_ENV || 'development',
    allowedOrigins: [
      'https://tmp8-frontend.vercel.app',
      'http://localhost:5173'
    ]
  });
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;