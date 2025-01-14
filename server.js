const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve the index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = 3200;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
