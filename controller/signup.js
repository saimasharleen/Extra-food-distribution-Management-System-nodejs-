var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('signup');
});

router.post('/', function(request, response){
	/*response.send(request.body.username +"<br/>"+ request.body.password);*/
	  
      var user = {
      	firstname : request.body.firstname,
      	lastname : request.body.lastname,
      	username : request.body.username,
      	email : request.body.email,
      	phoneno : request.body.phoneno,
      	area : request.body.area,
      	usertype : request.body.usertype,
            password : request.body.password,
            image : "abcd",
            status: "requested"
      };
      if(!user.firstname || !user.lastname || !user.username || !user.email || !user.phoneno || !user.area || !user.usertype){
      	//console.log(user);
            response.redirect('/signup');
      }else
      {         	
            userModel.insert(user,function(status){
      		if(status == true){
                        userModel.insertLogin(user,function(status){
                              if(status == true){
                                    
                                    response.redirect('/login');
                              }
                              else{
                                    console.log(user);
                                    response.redirect('/signup');
                              }
                        });
      			//console.log(user.username);
      		}
      		else{

      			/*response.send('Error in adding user');*/
                        response.redirect('/signup');
      		}
      	});
      }
});

module.exports = router;