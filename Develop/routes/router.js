const app = require('express').Router();

const notesRouter = require('./notes');
const apiRouter = require('./api')

app.use('/notes', notesRouter);
app.use('/api', apiRouter);

module.exports = app;
