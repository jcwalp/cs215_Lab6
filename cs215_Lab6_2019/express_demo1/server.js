

var http = require("http"),
    server;
var PORT = 8080;    

server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("streller sez: \"It Works\" !\n");
});

server.listen(PORT);

console.log("Server running on port "+ PORT);
