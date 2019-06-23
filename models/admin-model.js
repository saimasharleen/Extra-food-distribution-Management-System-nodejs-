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
	
	
	
}
