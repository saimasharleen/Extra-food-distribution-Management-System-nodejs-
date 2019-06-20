var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	response.render('signup');
});

router.post('/', function(request, response){
	/*response.send(request.body.username +"<br/>"+ request.body.password);*/
});

module.exports = router;