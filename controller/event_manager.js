var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');
var router = express.Router(); 

router.get('/', function(request, response){
	response.render('event_manager/index');
});

router.post('/', function(request, response){
	// response.render('event_manager/index');

	var user = {
		eventname : request.body.eventname,
		eventdate : request.body.eventdate,
		eventpost : request.body.eventpost,
		location : request.body.location,
	};

	if(!user.eventname || !user.eventdate || !user.eventpost || !user.location){
		response.redirect('event_manager/index');
	}else{
		userModel.insertevent(user, (status) => {
			if(status == true){
				response.send("Welcome Manager");
				// response.redirect(/)
			}else{
				response.send("SQL error");
			}
		})
	}
});

module.exports = router;