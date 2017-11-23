var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Activity = mongoose.model('Activity');
var User = mongoose.model('User');

let response = {
  status: 200,
  data: [],
  message: null
};

router.get('/', function (req, res, next) {
  res.send(response);
});


router.get('/activities', function (req, res, next) {
  Activity.find({}).exec(function (err, activities) {
    if (err) res.send(err);
    res.json(activities);
  });
});

module.exports = router;
