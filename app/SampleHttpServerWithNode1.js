var http = require('http');
var myServer = http.createServer(function(request, response){
    response.writeHead(200, {"Content-type" : "text/plain"});
    response.write('<h1>Ram Maradolla m</h1>');
    response.end();
});
myServer.listen(3000);