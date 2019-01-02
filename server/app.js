const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');

app.use(cors("*"));
app.use('/sequence', router);

module.exports = app;
