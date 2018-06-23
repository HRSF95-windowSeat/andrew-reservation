const app = require('./app.js');
const couch = require('../database/couchdb');

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('Listening to port 3001');
});

couch.listDatabases().then((dbs) => {
  console.log(dbs);
});
