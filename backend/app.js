const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const productRoutes = require('./routes/productRoutes'); // Import routes

const app = express();

console.log('Starting server setup...');

// Middleware
app.use(cors({ origin: config.FRONTEND_URL }));
console.log('CORS middleware configured with origin:', config.FRONTEND_URL);

app.use(express.json());
console.log('JSON parsing middleware configured.');

app.use('/uploads', express.static('uploads'));
console.log('Static file serving middleware configured for /uploads directory.');

// MongoDB connection
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB at', config.MONGODB_URI);
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Use the routes
app.use('/api', productRoutes);
console.log('Product routes registered under /api');

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).send('Something broke!');
});

console.log('Server setup completed.');

module.exports = app;
