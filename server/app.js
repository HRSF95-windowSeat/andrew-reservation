require('newrelic');
const express = require('express');
const path = require('path');
const redis = require('redis');
const postgresdb = require('../database/postgresdb');

const client = redis.createClient();

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/restaurant/:restaurant_id', express.static(path.join(__dirname, '../public')));

const cache = (req, res, next) => {
  const id = req.params.restaurant_id;
  client.get(id, (err, data) => {
    if (err) {
      throw err;
    }
    if (data != null) {
      res.status(200).send(JSON.parse(data));
    } else {
      next();
    }
  });
};

const queryGetFromDb = (req, res) => {
  postgresdb.grabTimeSlots(req.params.restaurant_id, req.params.date, (error, data) => {
    if (error) {
      res.sendStatus(500).send(error);
    } else {
      client.setex(req.params.restaurant_id, 3600, JSON.stringify(data.rows[0]));
      res.status(200).send(data.rows[0]);
    }
  });
};

app.get('/restaurant/:restaurant_id/:date', cache, queryGetFromDb);

app.post('/restaurant/:restaurant_id/:date', (req, res) => {
  res.end();
});

// app.put('/restaurant/:restaurant_id/:date', (req, res) => {
//   res.end();
// });

// app.delete('/restaurant/:restaurant_id/:date', (req, res) => {
//   res.end();
// });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('Listening to port 3001');
});
