var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from event where id=?";
		db.getResult(sql, [userId], (result) => {
			//console.log(result);
			callback(result[0]);
		});
	},

	getAll: function(callback){
		var sql = "SELECT * FROM event order by id desc";
		db.getResult(sql, [], (result) => {
			callback(result);
		});
    },
    
    insertevent: function(user, callback){
		var sql = "INSERT INTO event values(null, ?, ?, ?, ?, null, null)";
		db.execute(sql, [user.eventname, user.eventdate, user.eventpost, user.location], (success) => {
			callback(success);
		});
    },
    
    editevent: function(user, callback){
		var sql = "UPDATE event set  eventname=?, eventdate=?, eventpost=?, location=? where id=?";
		db.execute(sql, [user.eventname, user.eventdate, user.eventpost, user.location, user.id], function(status){
		    callback(status);
	    });
    },

    deleteevent: function(user, callback){
		var sql = "DELETE FROM event where id = ? ";
		db.execute(sql, [user], function(status){
		    callback(status);
	    });
	},
	
	updateStatus: function(user, callback){
		var sql = "UPDATE event set status='closed' where id=?";
		db.execute(sql, [user], function(status){
		    callback(status);
	    });
    },

    getRanking: function(callback){
		var sql = "SELECT * FROM event order by vote desc";
		db.getResult(sql, [], function(result){
			callback(result);
		});
    },
}
