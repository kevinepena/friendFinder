var friendsData = require("../data/friends.js");
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newfriend = req.body;

        console.log(newfriend);

        friendsData.push(newfriend);

        res.json(newfriend);
    });

}