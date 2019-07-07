var express = require('express');
var multer  = require('multer');
var mysql = require('mysql');
var path    = require('path');
var ownerModel = require.main.require('./models/owner-model');

var router = express.Router();


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'extrafood'
});

connection.connect();

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



router.get('/requests', function(req, res){

	var user = {
      	username: req.session.un
      };

	ownerModel.getRequests(user.username, function(results){
		if(results != null){
			res.render('owner/requests', {posts: results});			
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



router.get('/requests/accept/:id', function(req, res){	


	ownerModel.accept(req.params.id, function(result){
		if(result != null){
			res.redirect('/owner/requests');			
		}else{
			res.send('Error!.. try again...');
		}
	});
});

router.get('/requests/reject/:id', function(req, res){	


	ownerModel.reject(req.params.id, function(result){
		if(result != null){
			res.redirect('/owner/requests');			
		}else{
			res.send('Error!.. try again...');
		}
	});
});



router.get('/ranking', function(request, response){
  
  user = request.session.un;
  //console.log(user);
ownerModel.getrankingList(function(status){
  if(request.session.un != ""){
     response.render('owner/ranking',{userList: status});
  }else{
    response.redirect('/owner');
}
    
      });   
  
});

router.get('/search',function(req,res){
connection.query('SELECT username from userlogin where username like "%'+req.query.key+'%" and usertype="owner"', function(err, rows, fields) {
    if (err) throw err;
    var data=[];
    for(i=0;i<rows.length;i++)
      {
        data.push(rows[i].username);
      }
      res.end(JSON.stringify(data));
  });
});

router.get('/ownerlist', function(request, response){
  
  user = request.session.un;
  //console.log(user);
ownerModel.getOwnerList(function(status){
  if(request.session.un != ""){
    console.log(request.session.un);
     response.render('owner/ownerlist',{userList: status});
  }else{
    response.redirect('/owner');
}
    
      });   
  
});



router.get('/profile', function(request, response){
  user = request.session.un;
ownerModel.get(user, function(status){
  if(request.session.un != ""){
      response.render('owner/profile',{userList:status});
  }else{
    response.redirect('/');
}
      });   
});






router.get('/editdata', function(request, response){
  
  user = request.session.un;
ownerModel.get(user, function(status){
      //console.log(status);
      if(request.session.un != ""){
    console.log(request.session.un);
     response.render('owner/editdata',{userList:status});
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
      ownerModel.updatedata(user, function(status){

        if(status == true){
           if(request.session.un != ""){
    console.log(request.session.un);
     response.redirect('/owner/editprofile');
  }else{
    response.redirect('/');
}
          //response.redirect('/volunteer/editprofile');
        }else{
          response.send('Error in adding information ');
        }
      });
  
});






router.get('/editprofile', function(request, response){
   user = request.session.un;
ownerModel.get(user, function(status){
      //console.log(status);
      if(request.session.un != ""){
    console.log(request.session.un);
     response.render('owner/editprofile',{userList:status});
  }else{
    response.redirect('/login');
}
        //response.render('volunteer/editprofile',{userList:status});
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
    response.redirect('owner/editprofile');
  }else{
    //console.log(request.file);
    //console.log(request.file.filename);
    
      var user={
        username  : un,
        photos    : request.file.filename 
      };
      console.log(user);
      ownerModel.updatepost(user, function(status){

        if(status == true){
          if(status == true){
           if(request.session.un != ""){
    console.log(request.session.un);
     response.redirect('/owner/profile');
  }else{
    response.redirect('/');
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