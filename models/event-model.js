var db = require('./db');

module.exports={

	// get: function(userId, callback){
	// 	var sql = "select * from event where id=?";
	// 	db.getResult(sql, [us], (result) => {
	// 		//console.log(result);
	// 		callback(result[0]);
	// 	});
	// },

	getAll: function(callback){
		var sql = "SELECT * FROM event";
		db.getResult(sql, [], (result) => {
			callback(result);
		});
    },
    
    insertevent: function(user, callback){
		var sql = "INSERT INTO event values(null, ?, ?, ?, ?)";
		db.execute(sql, [user.eventname, user.eventdate, user.eventpost, user.location], (success) => {
			callback(success);
		});
	}
	
	
	
}
