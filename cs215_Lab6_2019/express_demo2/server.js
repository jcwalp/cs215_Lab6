var express = require("express"),
  http = require("http"),
  app = express();

var PORT = 8080;

// set up a static file directory to use for default routing
app.use(express.static(__dirname + "/site"));

// Create our Express-powered HTTP server
http.createServer(app).listen(PORT);

// set up our routes
app.get("/hello", function(req, res) {
  res.send("Hi There. What it is");
});

app.get("/goodbye", function(req, res) {
  res.send("Sayonara!");
});
app.get("/index.html", function(req, res) {
});



// set up the root route
/*
app.get("/", function (req, res) {
    res.send("This is the root route!");
});
*/

console.log("Server running on port " + PORT);
