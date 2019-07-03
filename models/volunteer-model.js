var db = require('./db');

module.exports={
	get: function(userId, callback){
		var sql = "select * from user where username=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});

},
 clear: function(id, callback){
		var sql = "delete from ownerpost where id="+id;
		db.execute(sql, function(status){
			//console.log(result);
			callback(status);
		});
	},

   
	getinfo: function(callback){
		var sql = "select * from ownerpost";
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},
	getnotification: function(callback){
		var sql = "select * from ownerpost";
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
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

}
}