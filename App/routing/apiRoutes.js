
let existingFriendsData = require("../Data/friends.js/friends.js")
module.exports = (app,path) => {

  // app.get("/api:friends?", (req, res) => {
  //   res.send('this is the friends api page!')
  //   console.log("friends api page")
  // })
  app.get("/api/friends", (req, res) => {
    res.json(existingFriendsData.existingFriendsData);
    console.log("friends api page")
  })

  

  app.post("/api/friends", (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    
    console.log(newFriend);
  existingFriendsData.existingFriendsData.push(newFriend)
    
    
    // reservedTables.push(newTable);
    res.json(newFriend);
    });
  
}

  