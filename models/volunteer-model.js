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

}
}