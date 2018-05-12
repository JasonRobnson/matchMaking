

module.exports = function(app, path){


app.get("/survey", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/survey.html"));

  console.log("Some one has hit the survey page!")
})

app.get("/",(req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
  console.log("Sone one has hit the homepage!")
});

};
