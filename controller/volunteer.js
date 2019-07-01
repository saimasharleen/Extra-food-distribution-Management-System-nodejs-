var express = require('express');
var mysql   = require('mysql');
var multer  = require('multer');
var path    = require('path');
var volunteerModel = require.main.require('./models/volunteer-model');

var router = express.Router();

router.get('/', function(request, response){
	response.render('volunteer/home');
});

router.get('/acceptedpost', function(request, response){
	response.render('volunteer/acceptedpost');
});

router.get('/notification', function(request, response){
	response.render('volunteer/notification');
});

router.get('/editprofile', function(request, response){
	user = 1;
volunteerModel.get(user, function(status){
			//console.log(status);
    		response.render('volunteer/editprofile',{userList:status});
    	});	 
	});


router.get('/profile', function(request, response){
	user = request.session.id;
	console.log(user);
volunteerModel.get(user, function(status){
			console.log(status);
    		response.render('volunteer/profile',{userList:status});
    	});	  
});

router.get('/ranking', function(request, response){
	response.render('volunteer/ranking');
});

router.get('/vote', function(request, response){
	response.render('volunteer/vote');
});
router.post('/', function(request, response){
	/*response.send(request.body.username +"<br/>"+ request.body.password);*/
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

router.get('/',function(req, res){
	response.render('');
});

router.post('/editprofile', function(request, response){
	var user = {
		fname : request.body.firstname,
		lname : request.body.lastname,
		email : request.body.email,
		phoneno : request.body.phoneno,
		area : request.body.area,
		id: request.session.id
	}
//console.log(user1);
upload(request, response, function(err){
  if(err){
    response.render('volunteer/home');
  }else{
    console.log(request.file);
    console.log(request.file.filename);
    /*userModel.getAllpost(function(status){
      var l = status.length;
      var s= status[l-1].id;*/
      var user={
         photos : request.file.filename 
      };
      console.log(user);
      volunteerModel.updatepost(user, function(status){

    		if(status == true){
    			response.redirect('/volunteer/profile');
    		}else{
    			response.send('Error in adding pic');
    		}
    	});
  }
})

});


module.exports = router;