var connect = require('connect');
var http = require('http');

var app = connect();

function forum(request, response) {
    console.log("Forum");
}

function profile(request, response) {
    console.log("Profile");
}

app.use('/forum', forum);
app.use('/profile', profile);

http.createServer(app).listen(8080);
console.log("Server is running!");