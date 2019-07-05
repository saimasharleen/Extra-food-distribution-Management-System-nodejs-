var express = require('express');
var mysql = require('mysql');
var eventModel = require.main.require('./models/event-model');
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
		response.redirect('event_manager');
	}else{
		eventModel.insertevent(user, (status) => {
			if(status == true){
				response.render('event_manager/index');
			}
		});
	}

	// eventModel.getAll( (status) => {
	// 	response.render('event_manager/eventpost', {eventList: status});
});

module.exports = router;