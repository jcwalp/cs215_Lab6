var express = require("express"),
  http = require("http"),
  app = express();

var PORT = 8080;
var path = require('path');

// set up a static file directory to use for default routing
app.use(express.static(__dirname + "/www"));

// Create our Express-powered HTTP server
http.createServer(app).listen(PORT);

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/brightIdeas/index.html')
});



console.log("Server running on port " + PORT);
