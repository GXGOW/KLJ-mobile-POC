let express = require('express');
let router = express.Router();
const jwt = require('express-jwt');
var mongoose = require('mongoose');
var User = mongoose.model('User');
let passport = require('passport');

let auth = jwt({
  secret: process.env.NUCLEAR_LAUNCH_CODES,
  userProperty: 'payload'
});

router.post('/register', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: 'Gelieve alle verplichte velden in te vullen!'
    });
  }
  const new_user = new User({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    birthday: new Date(req.body.birthday)
  });
  new_user.username = req.body.username;
  new_user.setPassword(req.body.password);
  new_user.save(function (err) {
    if (err) console.log(err);
    return res.json({
      token: new_user.generateJWT(),
      firstname: new_user.firstname,
      role: new_user.role
    })
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
        token: user.generateJWT(),
        firstname: user.firstname,
        role: user.role
      });
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.get('/getByUsername', auth, function (req, res, next) {
  User.findOne({
      username: req.get('username')
    })
    .select({
      '_id': 0,
      'hash': 0,
      'salt': 0
    })
    .exec(function (err, user) {
      if (err) res.send(err);
      res.send(user);
    });
});

router.post('/checkusername', function (req, res, next) {
  User.find({
    username: req.body.username
  }, function (err, user) {
    if (err) res.send(err);
    if (user.length) res.send(false);
    else res.send(true);
  });
});

module.exports = router;
