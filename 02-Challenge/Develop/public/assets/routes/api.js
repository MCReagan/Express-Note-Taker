const app = require('express').Router();

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

app.post('/notes', (req, res) => {
    
});

module.exports = app;