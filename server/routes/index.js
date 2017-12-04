var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Activity = mongoose.model('Activity');
var User = mongoose.model('User');
let jwt = require('express-jwt');
let passport = require('passport');

let auth = jwt({
  secret: process.env.NUCLEAR_LAUNCH_CODES,
  userProperty: 'payload'
});


let response = {
  status: 200,
  data: [],
  message: null
};

mongoose.Promise = global.Promise;

router.get('/', function (req, res, next) {
  res.send(response);
});


router.get('/activities', function (req, res, next) {
  Activity.find({})
    .sort('date').exec(function (err, activities) {
      if (err) res.send(err);
      res.json(activities);
    });
});

router.get('/get_image', function (req, res, next) {
  Activity.findById('5a1b34970e83a31b58c797d1').exec(function (err, act) {
    res.send(act.image.data.toString('base64'));
  });
});

router.post('/add_activity', auth, function (req, res, next) {
  let new_activity = new Activity(req.body);
  // Workaround for NodeJS using the wrong timezone for some reason
  if (req.body.date) {
    new_activity.date.setHours(new_activity.date.getHours() + 1);
  }
  new_activity.save(function (err, act) {
    if (err) res.send(err);
    res.send(act);
  })
});

module.exports = router;
