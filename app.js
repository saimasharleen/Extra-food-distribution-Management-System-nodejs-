//DECLARATION
var express 	= require('express');
var bodyParser 	= require('body-parser');
var signup 		= require('./controller/signup');
var login 		= require('./controller/login');
var admin 		= require('./controller/admin');
var volunteer 		= require('./controller/volunteer');
var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


//MIDDLEWARE
app.use(bodyParser.urlencoded({
  extended: true
}));

//app.use(bodyParser.json());


//ROUTING
app.use('/signup', signup);
app.use('/login', login);
app.use('/admin', admin);
app.use('/volunteer', volunteer);
app.get('/index', function(request, response){
	response.render('index');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log("Server started at 3000...");
});

