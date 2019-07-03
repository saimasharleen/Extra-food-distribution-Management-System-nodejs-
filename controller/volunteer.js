var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	response.render('volunteer/home');
});

router.get('/acceptedpost', function(request, response){
	response.render('volunteer/acceptedpost');
});

router.get('/notification', function(request, response){
	response.render('volunteer/notification');
});

router.get('/profile', function(request, response){
	response.render('volunteer/profile');
});

router.get('/ranking', function(request, response){
	response.render('volunteer/ranking');
});

router.get('/vote', function(request, response){
	response.render('volunteer/vote');
});
router.post('/', function(request, response){
	/*response.send(request.body.username +"<br/>"+ request.body.password);*/
});

module.exports = router;