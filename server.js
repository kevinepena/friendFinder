// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// create express server
var app = express();

// set port, bitches
var PORT = process.env.PORT || 3000;

// data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var surveys = [
  {
    name: "kevin",
    number: 4697772814,
    email: "kevin@gmail.com",
    id: 34
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/api/surveys", function(req, res) {
  return res.json(surveys);
});



// create routes 
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// Create New Characters - takes in JSON input
app.post("/api/surveys", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.name = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  surveys.push(newcharacter);

  res.json(newcharacter);
});

// we need a listner for it to work, duh
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});