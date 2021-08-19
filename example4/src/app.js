const express = require('express');
const app = new express();
const path = require('path');

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/public/html/index.html'));
});

app.get('/colorapp', function (request, response) {
    response.sendFile(path.join(__dirname, '/public/html/colorapp.html'));
});

app.get('/counter', function (request, response) {
    response.sendFile(path.join(__dirname, '/public/html/counter.html'));
});

app.get('/stopwatch', function (request, response) {
    response.sendFile(path.join(__dirname, '/public/html/stopwatch.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, '127.0.0.1');