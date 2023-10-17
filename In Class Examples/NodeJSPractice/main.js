const http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'test/html'});
    response.end('Hello World!');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
// 1 + 3
// 1 + (2 * 3) - 4
// x = 10;
// let y = 20
// x + y

