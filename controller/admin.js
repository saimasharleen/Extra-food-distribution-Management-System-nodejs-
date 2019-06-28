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


router.get('/reject/:username', function(request, response){
	
    
    	 var username= request.params.username;


   
	adminModel.update(username, function(status){
		console.log(username);
                       response.redirect('/admin');  
                        });
      			//cons
	
});


router.get('/accept/:username', function(request, response){
	
    
    	 var username= request.params.username;


   
	adminModel.updateAccept(username, function(status){
		console.log(username);
                       response.redirect('/admin');  
                        });
      			//cons
	

});

router.get('/notice', function(request, response){
	
    response.render('admin/notice');
	
});


router.post('/notice', function(request, response){

    var user = {
      	post: request.body.notice
          
      };


       adminModel.insert(user,function(status){
         response.redirect('/');
        });

	});

module.exports = router;

