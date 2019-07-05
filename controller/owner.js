var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var ownerModel = require.main.require('./models/owner-model');

router.get('/', function(request, response){
	response.render('owner/home');
});

router.get('/posts', function(req, res){

	var user = {
      	username: req.session.un
      };

	ownerModel.getAll(user.username, function(results){
		if(results != null){
			res.render('owner/posts', {posts: results});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/posts/edit/:id', function(req, res){

	ownerModel.getById(req.params.id, function(result){
		if(result != null){
			res.render('owner/edit', {user: result[0]});			
		}else{
			res.send('Error!.. try again...');
		}
	});
});


router.get('/notification', function(request, response){
	response.render('owner/notification');
});

router.get('/profile', function(request, response){
	response.render('owner/profile');
});

router.get('/ranking', function(request, response){
	response.render('owner/ranking');
});

router.post('/', function(request, response){
	  
      var user = {
      	username: request.session.un,
      	restaurantname : request.body.restaurantname,
      	restaurantd : request.body.restaurantd,
      };
      
      if(!user.restaurantname || !user.restaurantd){
           response.redirect('/owner');
      }else{ 	
            ownerModel.insert(user,function(status){
                       response.redirect('/owner');
                        
      		});
      	}
});


router.post('/posts/edit/:id', function(req, res){
	
	var data = {
		restaurantname: req.body.restaurantname,
		restaurantd: req.body.restaurantd,
		id: req.params.id
	}
	ownerModel.update(data, function(status){

		if(status){
			res.redirect('/owner/posts');

		}else{
			res.redirect('/owner/posts/edit/'+req.params.id);
		}

	});
});


router.get('/posts/delete/:id', function(req, res){	


	ownerModel.delete(req.params.id, function(result){
		if(result != null){
			res.redirect('/owner/posts');			
		}else{
			res.send('Error!.. try again...');
		}
	});
});


module.exports = router;