const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hi', (req, res) => {
  res.send('Hi World!');
});

app.listen(4001);