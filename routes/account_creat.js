var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('account_creat', { title: 'creat account' });
});



module.exports = router;
