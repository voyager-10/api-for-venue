const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to get events
app.get('/', async (req, res) => {
    try {
        const data = await fs.readFile('./events.json', 'utf8');
        const events = JSON.parse(data);
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read events data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
