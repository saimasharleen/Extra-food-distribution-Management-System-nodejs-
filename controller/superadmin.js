var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var adminModel = require.main.require('./models/admin-model');


router.get('/', function(request, response){
  adminModel.getAll(function(status){
                       response.render('superadmin/home',{userList: status});  
                        });
            //cons
  
});


router.get('/reject/:username', function(request, response){
  
    
       var username= request.params.username;


   
  adminModel.update(username, function(status){
    console.log(username);
                       response.redirect('/superadmin');  
                        });
            //cons
  
});


router.get('/accept/:username', function(request, response){
  
    
       var username= request.params.username;


   
  adminModel.updateAccept(username, function(status){
    console.log(username);
                       response.redirect('/superadmin');  
                        });
            //cons
  
});

// get notice

router.get('/noticeupdated', function(request, response){


       adminModel.getNotice(function(status){
         response.render('superadmin/noticeupdated',{userList: status});
        });

  });

// ends

router.get('/adminsignup', function(request, response){


       adminModel.getNotice(function(status){
         response.render('superadmin/adminsignup',{userList: status});
        });

  });

//end 2




router.get('/notice', function(request, response){
  
    response.render('superadmin/notice');
  
});


router.get('/noticeupdated', function(request, response){
  
    response.render('superadmin/noticeupdated');
  
});

router.post('/notice', function(request, response){

    var user = {
        post: request.body.notice
          
      };


       adminModel.insert(user,function(status){
         response.redirect('/superadmin/noticeupdated');
        });

  });


router.get('/noticeupdated/delete/:id', function(request, response){
  
    
       var id= request.params.id;


   
  adminModel.deleteNotice(id, function(status){
    //console.log(username);
                       response.redirect('/superadmin/noticeupdated');  
                        });
            //cons
  
});

router.get('/noticeupdated/update/:id', function(request, response){
  
    
       var id= request.params.id;


   
  adminModel.getNotice2(id, function(status){
    console.log(status[0].post);

                       response.render('superadmin/updatenotice', {status});  
                        });
            //cons
  
});
router.post('/noticeupdated/update/:id', function(request, response){
  
    
       var user = {
        id : request.params.id,
        post : request.body.notice
       }

//console.log(user);
   
  adminModel.updateNotice(user, function(status){
              
              console.log(status);
                       response.redirect('/superadmin');  
                        });
            //cons
  
});

// for login 


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
          if(status == 'volunteer' && status.status== 'accept'){
            //console.log(user.username);
            response.redirect('/volunteer');
          }
                  else if(status.usertype == 'admin' && status.status== 'accept'){
                        //console.log(user.username);
                        response.redirect('/admin');
                  }
                  else if(status == 'owner' && status.status== 'accept'){
                        //console.log(user.username);
                        response.redirect('/owner');
                  }
                  else if(status == 'eventmanager' && status.status== 'accept'){
                        //console.log(user.username);
                        response.redirect('/eventmanager');
                  }
                  else if(status == 'generaluser' && status.status== 'accept'){
                        //console.log(user.username);
                        response.redirect('/generaluser');
                  }
                 
                   else if(status.usertype == 'superadmin' && status.status== 'accept'){
                        //console.log(user.username);
                        response.redirect('/superadmin');
                  }

                   else if(status.usertype == 'admin' && status.status== 'accept'){
                        //console.log(user.username);
                        response.redirect('/admin');
                  }


          else{

            /*response.send('Error in adding user');*/
                        response.redirect('/login');
          }
        });
      }
});

module.exports = router;