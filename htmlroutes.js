

module.exports = function(app, path){


app.get("/survey.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./App/Public/survey.html"));
  console.log("Some one has hit the survey page!")
})

app.get("/:home?",(req, res) => {
  res.sendFile(path.join(__dirname, "./App/Public/home.html"));
  console.log("Sone one has hit the homepage!")
});

};
