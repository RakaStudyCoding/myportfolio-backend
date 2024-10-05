const express = require('express');
const portfolio = require('./src/portfolio');

const app = express();
const PORT = 3000;

app.get('/portfolio', (req, res) => {
    res.json(portfolio);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
