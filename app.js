// Import the express module
const express = require('express');
const path = require('path');

// Create an express app
const app = express();
const port = 3000;  // Port number for the server

// Middleware to serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to EJS (for dynamic HTML rendering)
app.set('view engine', 'ejs');
// test comment
app.set('views', path.join(__dirname, 'views'));

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'My Node.js Project' });
});

// Use routes defined in dbRoutes.js
const dbRoutes = require('./routes/dbRoutes');
app.use('/db', dbRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
