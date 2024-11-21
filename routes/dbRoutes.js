// Import Express
const express = require('express');

// Create a router instance
const router = express.Router();

// Simulating a database route
router.get('/getData', (req, res) => {
  // Example response, this would be replaced with real DB operations
  res.json({
    message: 'Fetched data from the database',
    data: [1, 2, 3, 4, 5]
  });
});

// Export the router to use in app.js
module.exports = router;
