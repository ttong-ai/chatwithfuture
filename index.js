const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'web')

// using the 'body-parser' middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'web')));

app.use('/', (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'web', '404.html'));
});

app.listen(3000, () => {
  console.log('server started');
});
