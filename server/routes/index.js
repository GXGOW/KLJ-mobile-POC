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

router.post('/add_activity', function (req, res, next) {
  let new_activity = new Activity(req.body);
  new_activity.save(function (err, act) {
    if (err) res.send(err);
    res.send(act);
  })
});

module.exports = router;
