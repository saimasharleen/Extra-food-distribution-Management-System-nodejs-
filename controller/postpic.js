var express = require('express');
var mysql   = require('mysql');
var multer  = require('multer');
var path    = require('path');
var volunteerModel = require.main.require('./models/volunteer-model');

var router = express.Router();

var storage = multer.diskStorage({
	destination: './storage/',
	filename: function(req, file, cb){
		cb(null, file.filename + '-' + Date.now()+path.extname(file.originalname));
	}
});

var upload = multer({
	storage: storage
}).single('photos');

router.get('/',function(req, res){
	response.render('');
});

router.post('/', function(request, response){



upload(request, response, function(err){
  if(err){
    response.render('registration');
  }else{
    console.log(request.file);
    console.log(request.file.filename);
    userModel.getAllpost(function(status){
      var l = status.length;
      var s= status[l-1].id;
      var user={
         photos : request.file.filename,
          id: s
      };
      userModel.updatepost(user, function(status){

    		if(status == true){
    			response.redirect('/ohome');
    		}else{
    			response.send('Error in adding pic');
    		}

    	});
      
    });

   
  }
})



});

module.exports = router;

