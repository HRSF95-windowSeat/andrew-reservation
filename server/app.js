const express = require('express');
const path = require('path');
const postgresdb = require('../database/postgresdb');

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/restaurant/:restaurant_id/:date', (req, res) => {
  postgresdb.grabTimeSlots(req.params.restaurant_id, req.params.date, (error, data) => {
    if (error) {
      res.sendStatus(500);
    }
    res.send(data.rows[0]);
    console.log(data.rows[0]);
  });
});

app.post('/restaurant/:restaurant_id/:date', (req, res) => {
  res.end();
});

// app.put('/restaurant/:restaurant_id/:date', (req, res) => {
//   res.end();
// });

// app.delete('/restaurant/:restaurant_id/:date', (req, res) => {
//   res.end();
// });

module.exports = app;
