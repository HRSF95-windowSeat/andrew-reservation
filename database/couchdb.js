const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
  auth: {
    user: 'vincentcastelli',
    password: 'admin',
  },
});

// const reservationSchema = {
//   id: Number,
//   party_size: Number,
//   date: String,
//   party_size_max: Number,
//   time: String,
// };

// const find = (id, handleResponse) => {
//   ReservationModel.find({ id: parseInt(id, 10) })
//     .then(results => handleResponse(null, results))
//     .catch(err => handleResponse(err, null));
// };

module.exports = couch;
