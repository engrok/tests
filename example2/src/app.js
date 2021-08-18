const express = require('express');
const app = new express();
const path = require('path');

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, '127.0.0.1');