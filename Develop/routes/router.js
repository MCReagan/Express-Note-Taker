const app = require('express').Router();

const apiRouter = require('./api')

app.use('/', apiRouter);

module.exports = app;
