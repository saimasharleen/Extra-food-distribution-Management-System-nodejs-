var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var multer  = require('multer');
var path    = require('path');
var userModel = require.main.require('./models/user-model');
var adminModel = require.main.require('./models/admin-model');




var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'extrafood'
});

connection.connect();

/*

router.get('/', function(request, response){
  adminModel.getAll(function(status){
                       response.render('superadmin/home',{userList: status});  
                        });
            //cons
  
});*/

router.get('/', function(request, response){
  user = request.session.un;
  //console.log(user);
 adminModel.getAll(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('superadmin/home',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      }); 
  

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


/*router.get('/noticeupdated', function(request, response){



       adminModel.getNotice(function(status){
         response.render('superadmin/noticeupdated',{userList: status});
        });

  });*/

router.get('/noticeupdated', function(request, response){
  user = request.session.un;
  //console.log(user);
 adminModel.getNotice(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('superadmin/noticeupdated',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      }); 
  
});

// ends

/*router.get('/adminsignup', function(request, response){



       adminModel.getNotice(function(status){
         response.render('superadmin/adminsignup',{userList: status});
        });


  });*/


//end 2




/*router.get('/notice', function(request, response){

  
    response.render('superadmin/notice');
  
});
*/

router.get('/notice', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('superadmin/notice');
  }else{
    response.redirect('/login');
}
 
});


/*router.get('/noticeupdated', function(request, response){
  
    response.render('superadmin/noticeupdated');
  
});*/

router.get('/noticeupdated', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('superadmin/noticeupdated');
  }else{
    response.redirect('/login');
}
 

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


// for signup

router.get('/adminsignup', function(request, response){
  response.render('superadmin/adminsignup');
});
// session signup

router.get('/adminsignup', function(request, response){
  user = request.session.un;
  //console.log(user);
 adminModel.getAll(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('superadmin/adminsignup');
  }else{
    response.redirect('/login');
}
     
      }); 
  
});
//ends
//admin list
router.get('/adminlist', function(request, response){
  user = request.session.un;
  //console.log(user);
 adminModel.getAdminList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('superadmin/adminlist',{userList:status});
  }else{
    response.redirect('/login');
}
      
      }); 
  
});
//
router.get('/listuser', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('superadmin/listuser');
  }else{
    response.redirect('/login');
}
 
});

//

router.post('/adminsignup', function(request, response){
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
            response.redirect('/superadmin/adminsignup');
      }else
      {           
            adminModel.insert0(user,function(status){
          if(status == true){
                        userModel.insertLogin(user,function(status){
                              if(status == true){
                                    
                                    response.redirect('/superadmin');
                              }
                              else{
                                    console.log(user);
                                    response.redirect('/superadmin/adminsignup');
                              }
                        });
            //console.log(user.username);
          }
          else{

            /*response.send('Error in adding user');*/
                        response.redirect('/superadmin/adminsignup');

          }
        });
      }
});


//ends

//get profile for superadmin
router.get('/profile', function(request, response){
  user = request.session.un;
  //console.log(user);
adminModel.get(user, function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('superadmin/profile',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      });   
});
//ends


//edit data and edit profile

router.get('/editdata', function(request, response){
  
  user = request.session.un;
adminModel.get(user, function(status){
      //console.log(status);
      if(request.session.un != ""){
    console.log(request.session.un);
     response.render('superadmin/editdata',{userList:status});
  }else{
    response.redirect('/login');
}
        
      }); 
});
router.post('/editdata',function(request, response){
      var user={
        username  : request.session.un,
        firstname : request.body.firstname,
        lastname  : request.body.lastname,
        email     : request.body.email,
        phoneno   : request.body.phoneno,
        area      : request.body.area
      };
      console.log(user);
      adminModel.updatedata(user, function(status){

        if(status == true){
           if(request.session.un != ""){
    console.log(request.session.un);
     response.redirect('/superadmin/editprofile');
  }else{
    response.redirect('/login');
}
          
        }else{
          response.send('Error in adding information ');
        }
      });
  
});

var storage = multer.diskStorage({
  destination: './storage/',
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
  storage: storage
}).single('photos');


router.get('/editprofile', function(request, response){
   user = request.session.un;
adminModel.get(user, function(status){
      //console.log(status);
      if(request.session.un != ""){
    console.log(request.session.un);
     response.render('superadmin/editprofile',{userList:status});
  }else{
    response.redirect('/login');
}
        //response.render('volunteer/editprofile',{userList:status});
      }); 
  });
router.post('/editprofile', function(request, response){

  var un  =  request.session.un;

upload(request, response, function(err){
  if(err){
    response.redirect('superadmin/editprofile');
  }else{
    //console.log(request.file);
    //console.log(request.file.filename);
    
      var user={
        username  : un,
        photos    : request.file.filename 
      };
      console.log(user);
      adminModel.updatepost(user, function(status){

        if(status == true){
          if(status == true){
           if(request.session.un != ""){
    console.log(request.session.un);
     response.redirect('/superadmin/profile');
  }else{
    response.redirect('/login');
}
        
        }else{
          response.send('Error in adding pic');
        }
  }
});
}
});
});


//eventlist
 
router.get('/eventlist', function(request, response){
  
  user = request.session.un;
  //console.log(user);
 adminModel.getEventList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('superadmin/eventlist',{userList: status});
  }else{
    response.redirect('/login');
}
    
      });   
  
});

// volunteerlist

router.get('/volunteerlist', function(request, response){
  
  user = request.session.un;
  //console.log(user);
 adminModel.getVolunteerList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('superadmin/volunteerlist',{userList: status});
  }else{
    response.redirect('/login');
}
    
      });   
  
});

//rest ownerlist

router.get('/restowner', function(request, response){
  
  user = request.session.un;
  //console.log(user);
 adminModel.getOwnerList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('superadmin/restowner',{userList: status});
  }else{
    response.redirect('/login');
}
    
      });   
  
});


//ends

router.get('/ranking', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('superadmin/ranking');
  }else{
    response.redirect('/login');
}
  //response.render('volunteer/ranking');
});


module.exports = router;