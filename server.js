const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from both src and assets directories
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'www-salesdone-ai-1760619437', 'www.salesdone.ai')));

// Handle specific routes
app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'about.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Handle all other routes - serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Serving files from /app/src with Cal.com integration`);
});
