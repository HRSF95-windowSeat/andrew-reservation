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
  const q = `SELECT * FROM bookings WHERE (restaurant_id = ${id} && date = ${JSON.stringify(date)});`;
  client.query(q, (error, results) => {
    if (error) {
      throw error;
    }
    cb(error, results);
  });
};

const postTimeSlot = (id, date, time, cb) => {
  const q = 'INSERT INTO bookings (id, date, time) VALUES (?, ?, ?)';
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

