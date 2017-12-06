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
  let new_activity = new Activity({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date
  });
  const prom = new Promise(function (resolve, reject) {
    User.findOne({
        username: req.body.organisedBy
      })
      .exec(function (err, user) {
        if (err) {
          reject(new Error(err));
        } else resolve(user);
      });
  });
  prom.then(function (user) {
    new_activity.organisedBy = user;
    new_activity.save(function (err, act) {
      if (err) reject(new Error(err));
      else res.send('success');
    });
  }).catch(function (err) {
    res.send(err.message);
  })
});

router.post('/join_activity', auth, function (req, res, next) {
  prom1 = new Promise(function (resolve, reject) {
    User.findOne({
        username: req.body.username
      })
      .exec(function (err, user) {
        if (err) {
          reject(new Error(err));
        } else resolve(user);
      });
  });
  prom2 = new Promise(function (resolve, reject) {
    Activity.findById(req.body.activityId, function (err, activity) {
      if (err) reject(new Error(err));
      else resolve(activity);
    })
  });
  Promise.all([prom1, prom2]).then(values => {
    values[1].attendees.push(values[0]);
    values[1].save(function (err, act) {
      if (err) reject(new Error(err));
      else res.send(true);
    })
  }).catch(function (err) {
    res.send(err.message);
  });
});

module.exports = router;
