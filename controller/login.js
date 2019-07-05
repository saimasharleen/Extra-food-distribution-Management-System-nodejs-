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

                  if(status.usertype == 'volunteer' && status.status== 'accept'){
                        //console.log(user.username);
                        request.session.un = status.un;
                        /*var x = request.session.un;
                        console.log(x);*/
                        response.redirect('/volunteer');
                  }
                  else if(status.usertype == 'admin' && status.status== 'accept'){

                        //console.log(user.username);
                        request.session.un = status.un;
                        response.redirect('/admin');
                  }
                else if(status.usertype == 'superadmin' && status.status== 'accept'){
                        //console.log(user.username);
                        request.session.un = status.un;
                        response.redirect('/superadmin');
                  }
                  else if(status.usertype == 'owner' && status.status== 'accept'){
                        //console.log(user.username);
                    request.session.un = request.body.username;
                        response.redirect('/owner');
                  }
                  else if(status.usertype == 'eventmanager' && status.status== 'accept'){
                        //console.log(user.username);
                        request.session.un = status.un;
                        response.redirect('/eventmanager');
                  }
                  else if(status.usertype == 'generaluser' && status.status== 'accept'){
                        //console.log(user.username);
                        request.session.un = status.un;
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