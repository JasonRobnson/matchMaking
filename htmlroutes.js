let  express = require('express');
let  bodyParser = require('body-parser');
let  path = require('path');

let app = express();
let PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});

app.get("/survey.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./App/Public/survey.html"));
  console.log("Some one has hit the survey page!")
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./App/Public/home.html"));
  console.log("Sone one has hit the homepage!")
});




module.exports ; 