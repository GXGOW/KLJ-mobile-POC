const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://klj-rest:Hqq69NYu5T7c@server.levls.be:27017/?authSource=user', {
  useMongoClient: true
});
require('./server/models/User');
require('./server/models/Activity');
const index = require('./server/routes/index');
const users = require('./server/routes/users');
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', index);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
