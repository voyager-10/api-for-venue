const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname)));

// Endpoint to get events
app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, 'events.json'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
