const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const passport = require('passport');
const app = express();
const mongoose = require('mongoose');
const env = require('env2')('.env');
mongoose.connect(process.env.DONALD_TRUMP_TWEETS, {
  useMongoClient: true
});
require('./server/models/User');
require('./server/models/Activity');
require('./server/config/passport');
const index = require('./server/routes/index');
const users = require('./server/routes/users');
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// var dummy = require('./server/data/Generate');
// dummy.dummies();

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Initialize passport
app.use(passport.initialize());

// API location
app.use('/api', index);
app.use('/user', users);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
