var db = require('./db');

module.exports={
	get: function(userId, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	},
updatepost: function(user, callback){
		var sql = "UPDATE user set u_img=? where id=?";

		db.execute(sql, [user.photos, user.id], function(status){
			callback(status);
		});

}
}