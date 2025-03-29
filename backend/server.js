const express = require('express');
const cors = require('cors'); // Add this line
const config = require('./config');
const app = require('./app');

const PORT = config.PORT;

// Add this line to enable CORS
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
/*
const express = require('express');
const config = require('./config');
const app = require('./app');

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
*/