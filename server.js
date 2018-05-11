let  express = require('express');
let  bodyParser = require('body-parser');
let  path = require('path');
//This sets up epxress on a variable port if hosted, or a specific port if ran locally
let app = express();

let htmlRouter = require('./htmlroutes.js')(app,path);
let apiRouther = require('./apiRoutes.js')(app,path);

let PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });

module.exports