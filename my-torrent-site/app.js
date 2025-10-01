const express = require('express');
const path = require('path');
const app = express();
const port = 3000;  // You can change this port if needed

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files like CSS, JS, and images
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));


// Route for the homepage
app.get('/', (req, res) => {
  res.render('home.ejs', {
    // Pass any dynamic data if needed here
    title: 'Torrent Site - Updated Design'
  });
});

app.get('/update', (req, res) => {
  res.render('update.ejs', {
    // Pass any dynamic data if needed here
    title: 'Torrent Site - Updated Design'
  });
});

app.get('/result', (req, res) => {
  res.render('result.ejs', {
    // Pass any dynamic data if needed here
    title: 'Torrent Site - Updated Design'
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
