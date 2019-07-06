var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var multer  = require('multer');
var path    = require('path');
var adminModel = require.main.require('./models/admin-model');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'extrafood'
});

connection.connect();
/*router.get('/', function(request, response){
     user = request.session;

  adminModel.getAll2(function(status){
                       response.render('admin/home',{userList: status});  
                        });
            //cons
  
});*/

// with session


router.get('/', function(request, response){
  user = request.session.un;
  //console.log(user);
 adminModel.getAll2(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('admin/home',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      }); 
  
});

//ends



router.get('/reject/:username', function(request, response){
  
    
       var username= request.params.username;


   
  adminModel.update(username, function(status){
    console.log(username);
                       response.redirect('/admin');  
                        });
            //cons
  

});
router.get('/search',function(req,res){
connection.query('SELECT username from user where username like "%'+req.query.key+'%"', function(err, rows, fields) {
    if (err) throw err;
    var data=[];
    for(i=0;i<rows.length;i++)
      {
        data.push(rows[i].username);
      }
      res.end(JSON.stringify(data));
  });
});


router.get('/accept/:username', function(request, response){
  
    
       var username= request.params.username;


   
  adminModel.updateAccept(username, function(status){
    console.log(username);
                       response.redirect('/admin');  
                        });
            //cons
  
});

//get profile
router.get('/profile', function(request, response){
  user = request.session.un;
  //console.log(user);
adminModel.get(user, function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('admin/profile',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      });   
});



router.get('/editdata', function(request, response){
  
  user = request.session.un;
adminModel.get(user, function(status){
      //console.log(status);
      if(request.session.un != ""){
    console.log(request.session.un);
     response.render('admin/editdata',{userList:status});
  }else{
    response.redirect('/login');
}
        //response.render('volunteer/editdata',{userList:status});
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
     response.redirect('/admin/editprofile');
  }else{
    response.redirect('/login');
}
          //response.redirect('/volunteer/editprofile');
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

// get notice

/*router.get('/noticeupdated', function(request, response){



       adminModel.getNotice(function(status){
         response.render('admin/noticeupdated',{userList: status});
        });


  });*/


//with session

router.get('/noticeupdated', function(request, response){
  user = request.session.un;
  //console.log(user);
 adminModel.getNotice(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('admin/noticeupdated',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      }); 
  
});

//ends

router.get('/editprofile', function(request, response){
   user = request.session.un;
adminModel.get(user, function(status){
      //console.log(status);
      if(request.session.un != ""){
    console.log(request.session.un);
     response.render('admin/editprofile',{userList:status});
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
    response.redirect('admin/editprofile');
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
     response.redirect('/admin/profile');
  }else{
    response.redirect('/login');
}
          //response.redirect('/volunteer/profile');
        }else{
          response.send('Error in adding pic');
        }
  }
});
}
});
});


// ends




/*router.get('/notice', function(request, response){
  
    response.render('admin/notice');
  
});*/

//with session 

router.get('/notice', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('admin/notice');
  }else{
    response.redirect('/login');
}
 
});
//ends 

/*router.get('/noticeupdated', function(request, response){
  
    response.render('admin/noticeupdated');
  
});*/

router.get('/noticeupdated', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('admin/noticeupdated');
  }else{
    response.redirect('/login');
}
 
});

// admin list
 
/*router.get('/adminlist', function(request, response){
  
    adminModel.getAdminList(function(status){
                       response.render('admin/adminlist',{userList: status});  
                        });
  
});*/

//session
router.get('/adminlist', function(request, response){
  user = request.session.un;
  //console.log(user);
 adminModel.getAdminList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('admin/adminlist',{userList:status});
  }else{
    response.redirect('/login');
}
      
      }); 
  
});
//ends


// rest owner list

/*router.get('/restownerlist', function(request, response){
  
    adminModel.getAdminList(function(status){
                       response.render('admin/restownerlist',{userList: status});  
                        });
  
});*/




/*router.get('/listuser', function(request, response){
  
    response.render('admin/listuser');
  
});*/

//session
router.get('/listuser', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('admin/listuser');
  }else{
    response.redirect('/login');
}
 
});



router.post('/notice', function(request, response){

    var user = {
        post: request.body.notice
          
      };


       adminModel.insert(user,function(status){
         response.redirect('/admin/noticeupdated');
        });

  });



router.get('/noticeupdated/delete/:id', function(request, response){
  
    
       var id= request.params.id;


   
  adminModel.deleteNotice(id, function(status){
    //console.log(username);
                       response.redirect('/admin/noticeupdated');  
                        });
            //cons
  
});

router.get('/noticeupdated/update/:id', function(request, response){
  
    
       var id= request.params.id;


   
  adminModel.getNotice2(id, function(status){
    console.log(status[0].post);

                       response.render('admin/updatenotice', {status});  
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
                       response.redirect('/admin');  
                        });
            //cons
  
});


//eventlist
 
router.get('/eventlist', function(request, response){
  
  user = request.session.un;
  //console.log(user);
 adminModel.getEventList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('admin/eventlist',{userList: status});
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
     response.render('admin/volunteerlist',{userList: status});
  }else{
    response.redirect('/login');
}
    
      });   
  
});


router.get('/ranking', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('admin/ranking');
  }else{
    response.redirect('/login');
}
  //response.render('volunteer/ranking');
});

//rest ownerlist
router.get('/restowner', function(request, response){
  
  user = request.session.un;
  //console.log(user);
 adminModel.getOwnerList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('admin/restowner',{userList: status});
  }else{
    response.redirect('/login');
}
    
      });   

  
});

//end


router.get('/listuser', function(request, response){
  
    response.render('admin/listuser');
  
});



router.post('/notice', function(request, response){

    var user = {
      	post: request.body.notice
          
      };


       adminModel.insert(user,function(status){
         response.redirect('/admin/noticeupdated');
        });

	});



router.get('/noticeupdated/delete/:id', function(request, response){
	
    
    	 var id= request.params.id;


   
	adminModel.deleteNotice(id, function(status){
		//console.log(username);
                       response.redirect('/admin/noticeupdated');  
                        });
      			//cons
	
});

router.get('/noticeupdated/update/:id', function(request, response){
	
    
    	 var id= request.params.id;


   
	adminModel.getNotice2(id, function(status){
		console.log(status[0].post);

                       response.render('admin/updatenotice', {status});  
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
                       response.redirect('/admin');  
                        });
      			//cons
	
});

module.exports = router;

