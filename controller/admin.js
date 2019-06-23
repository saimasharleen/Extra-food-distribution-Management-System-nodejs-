var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var adminModel = require.main.require('./models/admin-model');


router.get('/', function(request, response){
	adminModel.getAll(function(status){
                       response.render('admin/home',{userList: status});  
                        });
      			//cons
	
});

router.post('/', function(request, response){
	/*response.send(request.body.username +"<br/>"+ request.body.password);*/
});

module.exports = router;