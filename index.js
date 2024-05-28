require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api', (req, res) => {
    try {
        const { title, description } = req.body;

        res.status(201).json({ message: "working" });
    } catch (error) {
        res.status(500).json({ message: "failed", error: error.message });
    }
});

app.post('/api/hello', (req, res) => {
    try {
        const { title, description } = req.body;

        res.status(201).json({ message: "working" });
    } catch (error) {
        res.status(500).json({ message: "failed", error: error.message });
    }
});

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
