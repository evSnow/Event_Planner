var express = require('express');
var router = express.Router();


router.get('/calendar', function(req, res, next) {
  res.render('calendar', { title: 'calendar' });
});

module.exports = router;
