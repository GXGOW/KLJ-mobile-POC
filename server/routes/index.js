var express = require('express');
var router = express.Router();

let response = {
  status: 200,
  data: [],
  message: null
};

router.get('/', function (req, res, next) {
  res.send(response);
});


router.get('/get_activities', function (req, res, next) {
  res.send(response);
});

module.exports = router;
