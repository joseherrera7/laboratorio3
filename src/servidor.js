var http = require('http');
const App = require('./app');

function onRequest(req, res){
    console.log("GG");
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write("h");
    res.end
}

var server = http.createServer(App);
server.listen(3000);
module.exports = app;