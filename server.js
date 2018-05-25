// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Create express server
var app = express();

// Set port
var PORT = process.env.PORT || 3000;

// Data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create routes 
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});