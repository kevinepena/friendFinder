var friendsData = require("../data/friends.js");
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    // Create New Friends - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newfriend = req.body;

        var newAnswers = newfriend.scores;

        var newName = "";
        var newPic = "";

        var totalDifference = 40;

        for (var i = 0; i < friendsData.length; i++) {
            var ran = 0;
          

            for (var j = 0; j < newAnswers.length; j++) {
                
                ran += Math.abs(friendsData[i].scores[j] - newAnswers[j]);

                if (ran < totalDifference) {
                    totalDifference = ran;
                    newName = friendsData[i].name;
                    newPic = friendsData[i].photo;
                }
            }


        }

        friendsData.push(newfriend);

        res.json({
            matchName: newName, 
            matchImage: newPic});
 
    });



}