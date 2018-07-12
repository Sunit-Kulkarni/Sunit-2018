var express = require('express');
var mongoose = require('mongoose');
var openpgp = require('openpgp');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
