const pg = require('pg');

const connection = ({
  host: 'localhost',
  user: 'vincentcastelli',
  database: 'sdc_reservations',
  port: 5432,
});

const client = new pg.Client(connection);
client.connect();

const grabTimeSlots = (id, date, cb) => {
  const q = `SELECT * FROM reservations_sql WHERE (id = ${id});`;
  client.query(q, (error, results) => {
    if (error) {
      throw error;
    }
    cb(error, results);
  });
};

const postTimeSlot = (id, partySize, date, partySizeMax, time, cb) => {
  const q = 'INSERT INTO reservations_sql (id, party_size, date, party_size_max, time) VALUES (?, ?, ?)';
  client.query(q, (error, results) => {
    if (error) {
      throw error;
    }
    cb(error, results);
  });
};

module.exports = {
  grabTimeSlots,
  postTimeSlot,
};

