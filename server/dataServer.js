const express = require('express');
const datagen = require('../dataGenerator');

const app = express();
const port = 3000;

datagen.writeData();

app.listen(port, () => {
  console.log('Listening to port 3000');
});
