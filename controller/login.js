var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
      userModel.getNotice(function(status){
                       response.render('index',{userList: status});  
                        });
      //response.render('index');
});
router.get('/login', function(request, response){
	response.render('login');
});

router.post('/login', function(request, response){
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
      		if(status == 'volunteer'){
      			//console.log(user.username);
      			response.redirect('/volunteer');
      		}
                  else if(status.usertype == 'admin' && status.status== 'accept'){
                        //console.log(user.username);
                        response.redirect('/admin');
                  }
                  else if(status == 'owner'){
                        //console.log(user.username);
                        response.redirect('/owner');
                  }
                  else if(status == 'eventmanager'){
                        //console.log(user.username);
                        response.redirect('/eventmanager');
                  }
                  else if(status == 'generaluser'){
                        //console.log(user.username);
                        response.redirect('/generaluser');
                  }

      		else{

      			/*response.send('Error in adding user');*/
                        response.redirect('/login');
      		}
      	});
      }
});

module.exports = router;