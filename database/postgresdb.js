const pg = require('pg');

const connection = ({
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER || 'vincentcastelli',
  database: process.env.POSTGRES_DB || 'sdc_reservations',
  port: process.env.POSTGRES_PORT || 5432,
});

const client = new pg.Client(connection);
client.connect().then(() => { console.log('DB connected'); }).catch((err) => { console.log(err, 'This is error connection'); });

const grabTimeSlots = (id, date, cb) => {
  const q = `SELECT * FROM reservations_sql WHERE (id = ${id});`;
  client.query(q, (error, results) => {
    if (error) {
      throw error;
    }
    cb(error, results);
  });
};

const postTimeSlots = (id, partySize, date, partySizeMax, time, cb) => {
  const q = 'INSERT INTO reservations_sql (id, party_size, date, party_size_max, time) VALUES (?, ?, ?)';
  client.query(q, (error, results) => {
    if (error) {
      throw error;
    }
    cb(error, results);
  });
};

const updateTimeSlots = (id, time, cb) => {
  const q = `UPDATE reservations_sql SET time = time || ',${time}' WHERE (id = ${id})`;
  client.query(q, (error, results) => {
    if (error) {
      throw error;
    }
    cb(error, results);
  });
};

module.exports = {
  grabTimeSlots,
  postTimeSlots,
  updateTimeSlots,
};

