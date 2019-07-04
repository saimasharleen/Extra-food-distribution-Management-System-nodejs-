//DECLARATION
var express 	= require('express');
var bodyParser 	= require('body-parser');
var signup 		= require('./controller/signup');
var login 		= require('./controller/login');
var admin 		= require('./controller/admin');
var volunteer 	= require('./controller/volunteer');
var event_manager = require('./controller/event_manager');
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
app.use('/event_manager', event_manager);
app.get('/index', function(request, response){
	response.render('index');
}); 


//SERVER STARTUP
app.listen(2000, function(){
	console.log("Server started at 2000...");
});

