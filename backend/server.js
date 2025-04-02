const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const productRoutes = require('./routes/productRoutes');

const app = express();

/// Debug messages for initialization
console.log('Backend Initialization:');
console.log(`Environment: ${process.env.NODE_ENV}`);
console.log(`MongoDB URI: ${config.MONGODB_URI}`);
console.log(`Frontend URL: ${config.FRONTEND_URL}`);
console.log(`API Prefix: ${config.API_PREFIX}`);
console.log(`Port: ${config.PORT}`);
console.log('Backend Initialization Complete');
//app.use(cors({ origin: config.FRONTEND_URL }));
// Enable CORS for all origins (or specify allowed origins)
// CORS setup
app.use(cors({
  origin: config.FRONTEND_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Database connection with enhanced logging
console.log('Attempting to connect to MongoDB...');
// MongoDB connection
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('✅ MongoDB connected successfully');
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
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Try these test endpoints:');
  console.log(`- Local:  http://localhost:${PORT}/api/healthcheck`);
  console.log(`- Render: https://tmp8-backend.onrender.com/api/healthcheck`);
});
