var db = require('./db');

module.exports={
	
	get: function(userId, callback){
		var sql = "select * from user where username=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});

},

updatedata: function(user, callback){
	var sql = "UPDATE user set firstname=?, lastname=?, email=?, phoneno=?, area=? where username=?";
	db.execute(sql, [user.firstname, user.lastname, user.email, user.phoneno, user.area, user.username], function(status){
			callback(status);
		});
},
updatepost: function(user, callback){
		var sql = "UPDATE user set u_img=? where username=?";
		db.execute(sql, [user.photos, user.username], function(status){
			callback(status);
		});

},
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

		var sql = "insert into ownerpost values (?,?,?,?,?,?,?)";
		db.execute(sql,['',user.username, user.restaurantname, user.restaurantd,'','1',''], function(status){
			callback(status);
			console.log(status);
			console.log(sql);
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