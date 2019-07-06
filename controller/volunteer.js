var express = require('express');
var mysql   = require('mysql');
var multer  = require('multer');
var path    = require('path');
var volunteerModel = require.main.require('./models/volunteer-model');

var router = express.Router();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'extrafood'
});

connection.connect();

router.get('/', function(request, response){
  user = request.session.un;
  //console.log(user);
 volunteerModel.getinfo(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('volunteer/home',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      }); 
  
});
router.get('/acceptedpost', function(request, response){
  user = request.session.un;
  //console.log(user);
 volunteerModel.accept(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('volunteer/acceptedpost',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      }); 
  
});

router.get('/notification', function(request, response){
  user = request.session.un;
  //console.log(user);
 volunteerModel.getnotification(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('volunteer/notification',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      }); 
});

router.get('/notification/clear/:id', function(request, response){
  
    
       var id= request.params.id;


   
  volunteerModel.clear(id, function(status){
    //console.log(username);
                       response.redirect('/volunteer/notification');  
                        });
            //cons
  
});


router.get('/ranking', function(request, response){
  
  user = request.session.un;
  //console.log(user);
volunteerModel.getrankingList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('volunteer/ranking',{userList: status});
  }else{
    response.redirect('/login');
}
    
      });   
  
});


router.get('/request/:id', function(request, response){
  
    
       var id= request.params.id;


   
  volunteerModel.request(id, function(status){
    //console.log(username);
                       response.redirect('/volunteer');  
                        });
            //cons
  
});


router.get('/cancel/:id', function(request, response){
  
    
       var id= request.params.id;


   
  volunteerModel.cancel(id, function(status){
    //console.log(username);
                       response.redirect('/volunteer');  
                        });
            //cons
  
});


router.get('/vote', function(request, response){
  
  user = request.session.un;
  //console.log(user);
volunteerModel.getvote(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('volunteer/vote',{userList: status});
  }else{
    response.redirect('/login');
}
    
      });   
  
});
router.post('/vote',function(request, response){
       var id= request.params.id;
        var user={
        id  : request.body.id,
        rating : request.body.rating,

      };
      console.log(user);
      volunteerModel.updatevote(user, function(status){

        if(status == true){
           if(request.session.un != ""){
    console.log(request.session.un);


     response.redirect('/volunteer/ranking');
  }else{
    response.redirect('/login');
}
          //response.redirect('/volunteer/editprofile');
        }else{
          response.send('Error in adding information ');
        }
      });
  
});
//eventlist
 
router.get('/eventlist', function(request, response){
  
  user = request.session.un;
  //console.log(user);
volunteerModel.getEventList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('volunteer/eventlist',{userList: status});
  }else{
    response.redirect('/login');
}
    
      });   
  
});
router.get('/search',function(req,res){
connection.query('SELECT username from userlogin where username like "%'+req.query.key+'%"', function(err, rows, fields) {
    if (err) throw err;
    var data=[];
    for(i=0;i<rows.length;i++)
      {
        data.push(rows[i].username);
      }
      res.end(JSON.stringify(data));
  });
});

router.get('/volunteerlist', function(request, response){
  
  user = request.session.un;
  //console.log(user);
volunteerModel.getVolunteerList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('volunteer/volunteerlist',{userList: status});
  }else{
    response.redirect('/login');
}
    
      });   
  
});

router.get('/acceptedpost', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('volunteer/acceptedpost');
  }else{
    response.redirect('/login');
}


  //response.render('volunteer/acceptedpost');

});

router.get('/notification', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('volunteer/notification');
  }else{
    response.redirect('/login');
}


  //response.render('volunteer/notification');

});

router.get('/profile', function(request, response){
  user = request.session.un;
  //console.log(user);
volunteerModel.get(user, function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('volunteer/profile',{userList:status});
  }else{
    response.redirect('/login');
}
      //console.log(status);
        //response.render('volunteer/profile',{userList:status});
      });   
});

router.get('/ranking', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('volunteer/ranking');
  }else{
    response.redirect('/login');
}


  //response.render('volunteer/ranking');
});

router.get('/vote', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('volunteer/vote');
  }else{
    response.redirect('/login');
}


  //response.render('volunteer/vote');
});

router.get('/editdata', function(request, response){
  
  user = request.session.un;
volunteerModel.get(user, function(status){
      //console.log(status);
      if(request.session.un != ""){
    console.log(request.session.un);
     response.render('volunteer/editdata',{userList:status});
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
      volunteerModel.updatedata(user, function(status){

        if(status == true){
           if(request.session.un != ""){
    console.log(request.session.un);
     response.redirect('/volunteer/editprofile');
  }else{
    response.redirect('/login');
}
          //response.redirect('/volunteer/editprofile');
        }else{
          response.send('Error in adding information ');
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
      volunteerModel.updatedata(user, function(status){

        if(status == true){
           if(request.session.un != ""){
    console.log(request.session.un);
     response.redirect('/volunteer/editprofile');
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


router.get('/editprofile', function(request, response){
   user = request.session.un;
volunteerModel.get(user, function(status){
      //console.log(status);
      if(request.session.un != ""){
    console.log(request.session.un);
     response.render('volunteer/editprofile',{userList:status});
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
    response.redirect('volunteer/editprofile');
  }else{
    //console.log(request.file);
    //console.log(request.file.filename);
    
      var user={
        username  : un,
        photos    : request.file.filename 
      };
      console.log(user);
      volunteerModel.updatepost(user, function(status){

        if(status == true){
          if(status == true){
           if(request.session.un != ""){
    console.log(request.session.un);
     response.redirect('/volunteer/profile');
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
volunteerModel.get(user, function(status){
      //console.log(status);
      if(request.session.un != ""){
    console.log(request.session.un);
     response.render('volunteer/editprofile',{userList:status});
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
    response.redirect('volunteer/editprofile');
  }else{
    //console.log(request.file);
    //console.log(request.file.filename);
    
      var user={
        username  : un,
        photos    : request.file.filename 
      };
      console.log(user);
      volunteerModel.updatepost(user, function(status){

        if(status == true){
          if(status == true){
           if(request.session.un != ""){
    console.log(request.session.un);
     response.redirect('/volunteer/profile');
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


module.exports = router;