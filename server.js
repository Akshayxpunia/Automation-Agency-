const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the www.salesdone.ai directory
app.use(express.static(path.join(__dirname, 'www-salesdone-ai-1760619437', 'www.salesdone.ai')));

// Handle client-side routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www-salesdone-ai-1760619437', 'www.salesdone.ai', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
