const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const app = require('./app'); // Import the configured app

// Enhanced logging
console.log('Starting server setup...');
console.log('Environment:', process.env.NODE_ENV || 'development');
console.log('MongoDB URI:', config.MONGODB_URI);
console.log('Frontend URL:', config.FRONTEND_URL);

// Database connection
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    
    // Verify collection exists
    mongoose.connection.db.listCollections({ name: 'products' }).next((err, collinfo) => {
      if (collinfo) {
        console.log('✔️ Products collection exists');
      } else {
        console.warn('❌ Products collection missing!');
      }
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });

// Route mounting with verification
app.use('/api', productRoutes);
console.log('Routes mounted at /api');

// Add a test route
app.get('/api/healthcheck', (req, res) => {
  console.log('Health check endpoint hit');
  res.json({ 
    status: 'healthy',
    dbState: mongoose.connection.readyState,
    routes: productRoutes.stack.map(layer => layer.route?.path).filter(Boolean)
  });
});
// Start server
const PORT = config.PORT || 3003;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Try these test endpoints:');
  console.log(`- Healthcheck: http://localhost:${PORT}/api/healthcheck`);
  console.log(`- CORS Test: http://localhost:${PORT}/api/test`);
  console.log(`- Products: http://localhost:${PORT}/api/products`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});