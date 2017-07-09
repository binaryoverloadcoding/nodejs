var http = require('http');

function onRequest(request, response) {
    console.log("Request: " + request.url);
    response.writeHead(200, {"Context-Type": "text/plain"});
    response.write("Hi there!");
    response.end();
}

http.createServer(onRequest).listen(8080);
console.log("Server is now running!")