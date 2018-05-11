let  express = require('express');
let  bodyParser = require('body-parser');
let  path = require('path');
//This sets up epxress on a variable port if hosted, or a specific port if ran locally
let app = express();


let PORT = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./App/routing/htmlroutes.js')(app,path);
require('./App/routing/apiRoutes.js')(app,path);


app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });

module.exports