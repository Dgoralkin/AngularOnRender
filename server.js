const express = require('express');
const path = require('path');

const app = express();

// Serve static files from dist folder
app.use(express.static(path.join(__dirname, 'dist/render')));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/render/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
