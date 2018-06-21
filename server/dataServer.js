const express = require('express');
const datagen = require('../dataGenerator');

const app = express();
const port = process.env.PORT || 3050;

datagen.writeData();

app.listen(port, () => {
  console.log('Listening to port 3050');
});
