const express = require('express');
const mongoose = require('mongoose');
const app = express();

let username = 'amruthap8';
let password = 'Amru#123';
let clusterName = 'cluster0.thrg5ui.mongodb.net';
let databaseName = 'Movie';

// Construct the MongoDB connection URI
let uri = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${clusterName}/${databaseName}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Define your routes and endpoints
app.use('/api/movies', require('./routes/movieRoutes'));

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
