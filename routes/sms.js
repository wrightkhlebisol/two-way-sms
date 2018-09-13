var express = require('express');
var router = express.Router();
var sms = require('../controllers/smsController')
/* POST users listing. */
router.post('/', sms.received);
router.get('/', function(req, res, next) {
    res.render('index', { title: 'This is the SMS handling endpoint' });
});

module.exports = router;