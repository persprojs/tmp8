const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Enhanced logging
console.log('Starting server setup...');
console.log('MongoDB URI:', config.MONGODB_URI);
console.log('Frontend URL:', config.FRONTEND_URL);

// Middleware
app.use(cors({ origin: config.FRONTEND_URL }));
app.use(express.json());

// Database connection with enhanced logging
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
  res.json({ 
    status: 'healthy',
    dbState: mongoose.connection.readyState,
    routes: productRoutes.stack.map(layer => layer.route?.path).filter(Boolean)
  });
});

// Start server
const PORT = config.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Try these test endpoints:');
  console.log(`- Local:  http://localhost:${PORT}/api/healthcheck`);
  console.log(`- Render: https://tmp8-backend.onrender.com/api/healthcheck`); // updated
});
