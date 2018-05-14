



 let newFriendScore = []
let existingFriendsData = [
    {

        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            2,
            3,
            6,
            6,
            3,
            3,
            5,
            4,
            4,
            1
          ]
      },
      {

        "name":"Sarah",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            11,
            2,
            3,
            4,
            3,
            2,
            1,
            2,
            4,
            2
          ]
      },
      {

        "name":"Charlie",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            1,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {

        "name":"Kathy",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            11,
            2,
            4,
            3,
            1,
            2,
            2,
            3,
            2,
            1
          ]
      },
      {

        "name":"Sam",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            3,
            2,
            3,
            6,
            3,
            2,
            2,
            3,
            2,
            4
          ]
      }
      
]

 let friendsScoreAdder = (existingFriendsScores) => {
    const  reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(existingFriendsScores.reduce(reducer));
}
// let  newFriendScoreAdder = (newFriendScore) => {
//     const  reducer = (accumulator, currentValue) => accumulator + currentValue;
//     console.log(newFriendScoreAdder.reduce(reducer));

// }
friendsScoreAdder(existingFriendsData[1].scores);

exports.existingFriendsData = existingFriendsData
exports.newFriendScore = newFriendScore
console.log("This is from friends.js")