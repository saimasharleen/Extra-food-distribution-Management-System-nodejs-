var express = require('express');
var mysql = require('mysql');
var guserModel = require.main.require('./models/guser-model');
var router = express.Router(); 

router.get('/', (request, response) => {
    var user = request.session.un;
    console.log(user);
    console.log("asce from submit")
	guserModel.getAll(user, (status) => {
        if(request.session.un != ""){
            response.render('general_user/home', {eventList: status});
        }else{
            response.redirect('/login');
        }
	});
}); 

router.get('/event_ranking', (request, response) => {
    // var user = 1;
	guserModel.getRanking( (status) => {
        if(request.session.un != ""){
            response.render('general_user/event_ranking', {eventList: status});
        }else{
            response.redirect('/login');
        }
	});
});

router.get('/comment/:id', (request, response) => {
    var user = request.params.id;
	guserModel.getComment(user, (status) => {
        guserModel.get(user, (status1) => {
            if(request.session.un != ""){
                uname= request.session.un;
                response.render('general_user/comment', {commentList: status, eventList: status1, username: uname });
            }else{
                response.redirect('/login');
            }
        });
    });
    
});
router.post('/comment/:id', (request, response) => {
     var user = {
         event_id: request.params.id,
         username: request.session.un,
         comment: request.body.comment
     };
     userId = request.params.id;
	guserModel.insertComment(user, (status) => {
        guserModel.getComment(userId, (status) => {
            guserModel.get(userId, (status1) => {
                uname= request.session.un;
                response.render('general_user/comment', {commentList: status, eventList: status1, username: uname});
            });
        });
	});
});

router.get('/vote/:id/:vote', (request, response) => {
    
    var user_id = request.session.un;
    var v = request.params.vote;
    var x = parseInt(v)+1;
    var user = {
        id : request.params.id,
        vote : x
    };
    //console.log(user);
    var event ={
        event_id : request.params.id,
        username : user_id
    };
	guserModel.vote(user, (status) => {
        guserModel.join(event, (status) => {
            response.redirect('/general_user');
        });
    });
    
});

module.exports = router;