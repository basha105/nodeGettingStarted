const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
    var parsedFile = url.parse(req.url, true);
    var filename = '.' + parsedFile.pathname;
    fs.readFile(filename, function(err, data) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(404.html);
    });

}).listen(8080);