var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from event where id=?";
		db.getResult(sql, [userId], (result) => {
			//console.log(result);
			callback(result[0]);
		});
	},

	getAll: function(user,callback){
        var sql = "SELECT * FROM event where id not in(select event_id from vote where username = ? ) and status = 'ongoing' order by id desc";
		db.getResult(sql, [user], (result) => {
			callback(result);
		});
    },

    vote: function(user, callback){
		var sql = "UPDATE event set vote=? where id=?";
		db.execute(sql, [user.vote, user.id], function(status){
		    callback(status);
	    });
    },
    
    join: function(user, callback){
		var sql = "INSERT INTO vote values(null, ?, ?)";
		db.execute(sql, [user.event_id, user.username], (success) => {
			callback(success);
		});
    },

    
	getRanking: function(callback){
		var sql = "SELECT * FROM event order by vote desc";
		db.getResult(sql, [], function(result){
			callback(result);
		});
    },
    
	getComment: function(user, callback){
		var sql = "SELECT * FROM comment where event_id = ?";
		db.getResult(sql, [user], function(result){
			callback(result);
		});
    },
    
    insertComment: function(user, callback){
		var sql = "INSERT INTO comment values(null, ?, ?, ?)";
		db.execute(sql, [user.event_id, user.username, user.comment], (success) => {
			callback(success);
		});
    },
    
//     editevent: function(user, callback){
// 		var sql = "UPDATE event set  eventname=?, eventdate=?, eventpost=?, location=? where id=?";
// 		db.execute(sql, [user.eventname, user.eventdate, user.eventpost, user.location, user.id], function(status){
// 		    callback(status);
// 	    });
//     },

//     deleteevent: function(user, callback){
// 		var sql = "DELETE FROM event where id = ? ";
// 		db.execute(sql, [user], function(status){
// 		    callback(status);
// 	    });
//     },
}
