const express = require('express');
const path = require('path');

const app = express();

app.get('/Home.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/web/Home.html'));
});

app.get('/About.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/web/About.html'));
});

app.get('/Contact.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/web/Contact.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/web/index.html'));
});

app.listen(3000, () => {
  console.log('server started');
});
