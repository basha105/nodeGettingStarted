const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var filename = '.' + parsedUrl.pathname;

    if (filename === './') {
        fs.readFile('./index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (filename === './about' || filename === './contact-me') {
        fs.readFile(filename+'.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else {
        fs.readFile('./404.html', function(err, data) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }

    
}).listen(8080);