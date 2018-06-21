const path = require('path');
const express = require('express');
const db = require('../database/postgresdb.js');

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/restaurant/:restaurant_id/:date', (req, res) => {
  db.grabTimeSlots(req.params.restaurant_id, req.params.date, (error, data) => {
    if (error) {
      res.sendStatus(500);
    }
    res.send(data);
  });
});

app.post('/restaurant/:restaurant_id/:date', (req, res) => {
  res.end();
});

app.put('/restaurant/:restaurant_id/:date', (req, res) => {
  res.end();
});

app.delete('/restaurant/:restaurant_id/:date', (req, res) => {
  res.end();
});

module.exports = app;
