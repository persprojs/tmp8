const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middleware/error');
const config = require('./config');

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: config.FRONTEND_URL })); // Allow requests from the frontend

// Route Imports
const productRoutes = require('./routes/productRoutes');

// API Routes
app.use(config.API_PREFIX, productRoutes);

// Test route
app.get(config.API_PREFIX + '/test', (req, res) => {
  res.status(200).json({ success: true, message: 'API is working' });
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
