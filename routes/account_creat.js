var express = require('express');
var router = express.Router();
const accountController = require("../controllers/accountController")

router.get('/', function(req, res, next) {
  res.render('account_creat', { title: 'Express' });
});



module.exports = router;