//DECLARATION
var express 	= require('express');
var bodyParser 	= require('body-parser');
var session     = require('express-session');
var signup 		= require('./controller/signup');
var login 		= require('./controller/login');
var logout      = require('./controller/logout');
var admin 		= require('./controller/admin');
var superadmin 		= require('./controller/superadmin');
var volunteer 		= require('./controller/volunteer');
var multer = require('multer');
var path = require('path');

var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/storage', express.static('storage'));


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
app.use('/superadmin', superadmin);
app.use('/volunteer', volunteer);
/*app.get('/index', function(request, response){
	response.render('index');
});*/


//SERVER STARTUP
app.listen(3000, function(){
	console.log("Server started at 3000...");
});

