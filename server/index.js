const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = require('./routes');
const port = 3000;
const request = require('request');
const passport = require('passport');
const cors = require('cors');
const logger = require('morgan')
require('babel-register');
require('babel-polyfill');
require('../database/config/index');


app.use(logger('tiny'))
// body-parser
app.use(
  cors({
    allowedHeaders: 'Content-Type, authorization',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static assets
app.use(express.static(path.join(__dirname, '../client/public/')));

app.use(router);


app.listen(port, () => console.log(`server listening on port ${port}`));
