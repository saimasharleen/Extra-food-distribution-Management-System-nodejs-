var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
	
	req.session.id = "";
	res.redirect('/login');
});

module.exports = router;