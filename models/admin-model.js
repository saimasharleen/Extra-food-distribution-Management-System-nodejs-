var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	},

	getAll: function(callback){
		var sql = "SELECT * FROM userLogin";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},

	update: function(user, callback){
		var sql = "UPDATE userLogin set status='reject' where username=?";

		db.execute(sql, [user], function(status){
			callback(status);
		});
	},

updateAccept: function(user, callback){
		var sql = "UPDATE userLogin set status='accept' where username=?";

		db.execute(sql, [user], function(status){
			callback(status);
		});
	},
	
	
insert: function(user, callback){
		var sql = "INSERT INTO admin values(null, ?)";
		db.execute(sql, [user.post], function(success){
			callback(success);
		});
	},


	
}
