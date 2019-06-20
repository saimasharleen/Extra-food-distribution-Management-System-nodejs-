//DECLARATION
var express 	= require('express');
var bodyParser 	= require('body-parser');
//var home 		= require('./controllers/home');
var signup 		= require('./controller/signup');
var admin 		= require('./controller/admin');
var app = express();


//CONFIGURATION
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


//MIDDLEWARE
app.use(bodyParser());


//ROUTING
app.use('/signup', signup);
app.use('/admin', admin);
/*app.use('/home', home);*/
app.get('/', function(request, response){
	/*response.send('Hello from expressJs');*/
	response.render('index');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log("Server startead at 3000...");
});


