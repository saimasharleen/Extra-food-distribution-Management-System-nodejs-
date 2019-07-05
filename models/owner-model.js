var db = require('./db');

module.exports={


	getAll: function(user, callback){
		console.log(user);
		var sql = "select * from ownerpost where username =?";
		console.log(sql);
		db.getResult(sql,[user], function(results){
			callback(results);
			console.log(results);
		});	
	},
	getById: function(id, callback){
		var sql = "select * from ownerpost where id=?";
		db.getResult(sql,[id], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		//var sql = "insert into ownerpost values ('','"+user.username+"','"+user.restaurantname+"','"+user.restaurantd+"','1')";
		var sql = "insert into ownerpost values (?,?,?,?,?,?)";
		db.execute(sql,['',user.username, user.restaurantname, user.restaurantd,'','1'], function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update ownerpost set restaurantname =?, restaurantd=? where id=?";
		db.execute(sql,[user.restaurantname, user.restaurantd, user.id], function(status){
			callback(status);
		});
	},

	delete: function(id, callback){
		var sql = "delete from ownerpost where id =?";
		db.execute(sql, [id], function(status){
			callback(status);
		});
	},
}