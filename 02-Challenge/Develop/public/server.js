const express = require('express');
const path = require('path');
const script = require('./assets/js/script')

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', script);

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/notes.html'))
);

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
