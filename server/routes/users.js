let express = require('express');
let router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
let passport = require('passport');

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

module.exports = router;
