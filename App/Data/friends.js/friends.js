



 let newFriendScore = [""]
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


  let  newFriendAdder = (newScore) => {
      let result = 0;
      for(i = 0; i < newScore.length; i++){
        if(parseFloat(newScore[i])){
            result += parseFloat(newScore[i]);
            console.log(result)
        }
  }
}

let scanExistFriendsScore = (existingFriendsData) => {
    console.log("scanExistingFriends")
}



module.exports = {
    existingFriendsData,
    newFriendScore,
    newFriendAdder,
    scanExistFriendsScore
}
// exports.existingFriendsData = existingFriendsData
// exports.newFriendScore = newFriendScore
