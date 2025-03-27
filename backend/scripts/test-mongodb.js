const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://sunilganotra:desiPwd1@cluster0.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Successfully connected to MongoDB Atlas!');
  mongoose.connection.close(); // Close the connection after successful connection
})
.catch(err => {
  console.error('Connection error:', err);
});
