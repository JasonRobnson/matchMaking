
// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes for Express
app.listen(PORT, function() {
  console.log(`App listening on port:${PORT}`);
});

app.get('/', function(req, res) {
  res.send('Welcome to the HomePage of this server!');
});
