
// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes for Express
app.listen(PORT, () => {
  console.log(`App listening on port:${PORT}`);
});

app.get('/', (req, res) => {
//   res.send('Welcome to the HomePage of this server!');
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/survey:file', (req, res) => {
  res.sendFile(path.join(__dirname, 'survey.html'));

});
