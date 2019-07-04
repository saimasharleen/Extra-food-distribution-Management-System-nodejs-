var express = require('express');
var router = express.Router();
var mysql = require('mysql');

router.get('/', function(request, response){
	response.render('event_manager/index');
});

router.post('/', function(request, response){
	// response.render('event_manager/index');

	var user
});

module.exports = router;