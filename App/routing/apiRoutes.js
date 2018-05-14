let existingFriendsData = require("../Data/friends.js/friends.js")
let newFriendScore = require("../Data/friends.js/friends.js")
let newFriendAdder = require("../Data/friends.js/friends.js")
let scanExistFriendsScore = require("../Data/friends.js/friends.js")

module.exports = (app, path) => {



// app.get("/api:friends?", (req, res) => {
//   res.send('this is the friends api page!')
//   console.log("friends api page")
// })
app.get("/api/friends", (req, res) => {
  res.json(existingFriendsData.existingFriendsData);
  console.log("friends api page")
})





/////ROUTES!!!

app.post("/api/friends", (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  let newFriend = req.body;
  let newUserData = req.body.scores;
  let totalDifference = 0;

  let bestMatch = {
      name: "",
      photo: "",
      friendDifference: 400,
    };

    // console.log(newUserData);
    // console.log(existingFriendsData.existingFriendsData)
    for (i = 0; i < existingFriendsData.existingFriendsData.length; i++) {
      // console.log(existingFriendsData.existingFriendsData[i])
      for (j = 0; j < existingFriendsData.existingFriendsData[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(newUserData[j]) - parseInt(existingFriendsData.existingFriendsData[i].scores[j]));
        console.log(totalDifference)
        if (totalDifference <= bestMatch.friendDifference) {
          bestMatch.name = existingFriendsData.existingFriendsData[i].name;
          bestMatch.photo = existingFriendsData.existingFriendsData[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

  existingFriendsData.existingFriendsData.push(newFriend);
  console.log(bestMatch);
  res.json(bestMatch);
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

});
}