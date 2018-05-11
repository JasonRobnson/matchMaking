let  express = require('express');
let  bodyParser = require('body-parser');
let  path = require('path');
let htmlRouter = require('./htmlroutes.js')


//This sets up epxress on a variable port if hosted, or a specific port if ran locally
let app = express();
let PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


