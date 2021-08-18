const http = require('http');

let app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!\n');
});

app.listen(3000, '127.0.0.1');