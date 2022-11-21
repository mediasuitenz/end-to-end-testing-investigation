var http = require('http'); // Import Node.js core module

const PORT = 8000;

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><h1>This is home page.</h1><p><a href="/page-1/">Page 1</a></p></body></html>');
        res.end();

    }
    else if (req.url == "/page-1/") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h1>This is page 1</h1></body></html>');
        res.end();

    }
    else {
        res.end('Invalid Request!');
    }
});

server.listen(PORT);

console.log(`Node.js web server at port ${PORT} is running..`);
