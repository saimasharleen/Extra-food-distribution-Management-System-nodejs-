var express = require('express');
var mysql = require('mysql');
var eventModel = require.main.require('./models/event-model');
var router = express.Router(); 

router.get('/', function(request, response){
	if(request.session.un != ""){
		response.render('event_manager/index');
	}else{
		response.redirect('/login');
	}

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
				response.redirect('/event_manager/eventpost');
			}
		});
	}

	// eventModel.getAll( (status) => {
	// 	response.render('event_manager/eventpost', {eventList: status});
});

router.get('/eventpost', (request, response) => {
	eventModel.getAll( (status) => {
		if(request.session.un != ""){
			response.render('event_manager/eventpost', {eventList: status});
		}else{
			response.redirect('/login');
		}
	});
});

// router.get('/eventpost', (request, response) => {
// 	eventModel.getAll( (status) => {
// 	response.render('event_manager/eventpost', {eventList: status});
// 	});
// });

router.get('/edit/:id', (request, response) => {
	var userId = request.params.id;
	eventModel.get(userId, (status) => {
		if(request.session.un != ""){
			response.render('event_manager/edit', {eventList: status});
		}else{
			response.redirect('/login');
		}
	});
});

router.post('/edit/:id', (request, response) => {
	var user = {
		id : request.params.id,
		eventname : request.body.eventname,
		eventdate : request.body.eventdate,
		eventpost : request.body.eventpost,
		location : request.body.location,
	};
	console.log(user);

	eventModel.editevent(user, (status) => {
	response.redirect('/event_manager/eventpost');
	});
});

router.get('/delete/:id', (request, response) => {
	var user = request.params.id;
	console.log(user);
	eventModel.deleteevent(user, (status) => {
	response.redirect('/event_manager/eventpost');
	});
});

router.get('/event/:id', (request, response) => {
	var user = request.params.id;
	eventModel.updateStatus(user, (status) => {
	response.redirect('/event_manager/eventpost');
	});
});

router.get('/event_ranking', (request, response) => {
    // var user = 1;
	eventModel.getRanking( (status) => {
		if(request.session.un != ""){
			response.render('event_manager/event_ranking', {eventList: status});
		}else{
			response.redirect('/login');
		}
	});
});

module.exports = router;