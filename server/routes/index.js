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

router.post('/register', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: 'Gelieve alle verplichte velden in te vullen!'
    });
  }
  var new_user = new User();
  new_user.username = req.body.username;
  new_user.setPassword(req.body.password);
  new_user.save(function (err) {
    if (err) return next(err);
  })
});

router.post('/login', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: 'Gelieve alle verplichte velden in te vullen!'
    });
  }
  passport.authenticate('local', function (err, user, info) {
    if (err) res.send(err);
    if (user) {
      return res.json({
        token: user.generateJWT()
      });
      return res.json('Yes hoera');
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.get('/', function (req, res, next) {
  res.send(response);
});


router.get('/activities', function (req, res, next) {
  Activity.find({}).exec(function (err, activities) {
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
  new_activity.save(function (err, act) {
    if (err) res.send(err);
    res.send(act);
  })
});

module.exports = router;
