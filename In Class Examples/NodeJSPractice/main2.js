const http = require("http");
const express = require('express');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'test/html'});
    response.end('Hello World!');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');