var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('login');
});

router.post('/', function(request, response){
	/*response.send(request.body.username +"<br/>"+ request.body.password);*/
 var user = {
      	username : request.body.username,
      	password : request.body.password,
          
      };
      if(!user.username || !user.password ){
      	//console.log(user);
            response.redirect('/login');
      }else
      {
      	userModel.validate(user,function(status){
      		if(status == 'owner'){
      			//console.log(user.username);
      			response.redirect('/volunteer');
      		}
      		else{

      			/*response.send('Error in adding user');*/
                        response.redirect('/signup');
      		}
      	});
      }
});

module.exports = router;