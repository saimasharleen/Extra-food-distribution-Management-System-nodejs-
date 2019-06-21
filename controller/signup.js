var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('signup');
});

router.post('/', function(request, response){
	/*response.send(request.body.username +"<br/>"+ request.body.password);*/
	  console.log("test");
      var user = {
      	firstname : request.body.firstname,
      	lastname : request.body.lastname,
      	username : request.body.username,
      	email : request.body.email,
      	phone : request.body.phoneno,
      	area : request.body.area,
      	usertype : request.body.usertype
      };
      if(!user.firstname || !user.lastname || !user.username || !user.email || !user.phoneno || !user.area || !user.usertype){
      	response.redirect('/signup');
      }else
      {
      	userModel.insert(user,function(status){
      		if(status == true){
      			console.log(user.username);
      			response.redirect('/login');
      		}
      		else{

      			response.send('Error in adding user');
      		}
      	});
      }
});

module.exports = router;