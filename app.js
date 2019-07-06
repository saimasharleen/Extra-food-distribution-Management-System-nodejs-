//DECLARATION
var express 	= require('express');
var bodyParser 	= require('body-parser');
var session     = require('express-session');
var signup 		= require('./controller/signup');
var login 		= require('./controller/login');
var logout      = require('./controller/logout');
var admin 		= require('./controller/admin');
var owner		= require('./controller/owner');
var superadmin 		= require('./controller/superadmin');
var volunteer 		= require('./controller/volunteer');
var event_manager = require('./controller/event_manager');
var general_user = require('./controller/general_user');
var  mysql=require('mysql');
var multer = require('multer');
var path = require('path');
var expressSession 	= require('express-session');

var app = express();




//CONFIGURATION
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/storage', express.static('storage'));
app.use(expressSession({secret: 'my top secret password', saveUninitialized: true, resave: false}));


//MIDDLEWARE
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({secret:'hhdhdhdhd', saveUninitialized: true, resave: false}));


//app.use(bodyParser.json());


//ROUTING
app.use('/signup', signup);
app.use('/', login);
app.use('/logout',logout);
app.use('/admin', admin);
app.use('/owner', owner);
app.use('/superadmin', superadmin);
app.use('/volunteer', volunteer);
app.use('/event_manager', event_manager);
app.use('/general_user', general_user);

/*app.get('/index', function(request, response){
	response.render('index');
});*/



//SERVER STARTUP
app.listen(3000, function(){
	console.log("Server started at 3000...");
});

