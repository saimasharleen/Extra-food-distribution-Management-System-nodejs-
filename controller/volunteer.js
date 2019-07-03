var express = require('express');
var mysql   = require('mysql');
var multer  = require('multer');
var path    = require('path');
var volunteerModel = require.main.require('./models/volunteer-model');

var router = express.Router();

router.get('/', function(request, response){
  if(request.session.un != ""){
    console.log(request.session.un);
      response.render('volunteer/home');
  }else{
    response.redirect('/login');
}
	//response.render('volunteer/home');
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