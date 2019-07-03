var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var adminModel = require.main.require('./models/admin-model');


router.get('/', function(request, response){
	adminModel.getAll(function(status){
                       response.render('admin/home',{userList: status});  
                        });
      			//cons
	
});


router.get('/reject/:username', function(request, response){
	
    
    	 var username= request.params.username;


   
	adminModel.update(username, function(status){
		console.log(username);
                       response.redirect('/admin');  
                        });
      			//cons
	
});


router.get('/accept/:username', function(request, response){
	
    
    	 var username= request.params.username;


   
	adminModel.updateAccept(username, function(status){
		console.log(username);
                       response.redirect('/admin');  
                        });
      			//cons
	

});

// get notice

router.get('/noticeupdated', function(request, response){


       adminModel.getNotice(function(status){
         response.render('admin/noticeupdated',{userList: status});
        });

	});

// ends



router.get('/notice', function(request, response){
	
    response.render('admin/notice');
	
});


router.get('/noticeupdated', function(request, response){
	
    response.render('admin/noticeupdated');
	
});

// admin list
 
router.get('/adminlist', function(request, response){
  
    adminModel.getAdminList(function(status){
                       response.render('admin/adminlist',{userList: status});  
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
         response.redirect('/');
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

