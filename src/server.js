const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const passwordRoutes = require('../src/routes/password');


// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // for parsing application/json

// Routes
// const passwordRoutes = require('./src/routes/password');

// Use the password routes
app.use('/password', passwordRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
