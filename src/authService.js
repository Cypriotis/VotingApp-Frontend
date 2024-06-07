const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const db = require('./database.js');
const votesController = require('./votesController.js');
const authController = require('./authController.js');
const { authenticateJWT } = require('./middleware.js');
require('dotenv').config();
const logger = require('./logger.js');
const app = express();
const port = 3000;
// Middleware for parsing JSON in request bodies
app.use(bodyParser.json());
// Middleware for enabling CORS
app.use(cors({ 
  origin: 'http://frontreact-1320091535.eu-west-3.elb.amazonaws.com',
  credentials: true // Allow credentials (cookies, authorization headers)
}));
// Mount your votesController routes
app.use('/api', votesController);

app.get('/', (req, res) => {
  res.send('Hello, this is the root route!!!');
});



// Mount your authController routes and use the authenticateJWT middleware
app.use('/api', authController);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logger.info('Backend started!');
});