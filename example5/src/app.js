const express = require('express');
const app = new express();
const path = require('path');

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/success', function (request, response) {
    response.sendFile(path.join(__dirname, '/success.html'));
});

app.post('/action', function (request, response) {
    response.redirect('/success');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, '127.0.0.1');