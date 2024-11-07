var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('ticket', { title: 'ticket' });
});

module.exports = router;
