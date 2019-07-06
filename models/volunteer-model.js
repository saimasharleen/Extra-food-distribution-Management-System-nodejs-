var db = require('./db');

module.exports={
	get: function(userId, callback){
		var sql = "select * from user where username=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});

},
accept:function(callback){
		var sql = "select * from ownerpost where reqid=2" ;
		console.log(sql);
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},
 clear: function(id, callback){
		var sql = "delete from ownerpost where id="+id;
		db.execute(sql, function(status){
			//console.log(result);
			callback(status);
		});
	},
    
    request: function(id, callback){
		var sql = "UPDATE ownerpost set reqid='1' where id=?";

		db.execute(sql, [id], function(status){
			callback(status);
		});
	},

	cancel: function(id, callback){
		var sql = "UPDATE ownerpost set reqid='0' where id=?";

		db.execute(sql, [id], function(status){
			callback(status);
		});
	},

	getrankingList:function(callback){
		var sql = "select * from ownerpost order by vote desc" ;
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},
   getVolunteerList: function(callback){
		var sql = "select * from userlogin where usertype='volunteer'" ;
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},
   getEventList: function(callback){
		var sql = "select * from event" ;
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},
	getvote: function(callback){
		var sql = "select * from ownerpost  ";
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},
	getinfo: function(callback){
		var sql = "select * from ownerpost where reqid= 0 ";
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
	updatevote: function(user, callback){
	var sql = "UPDATE ownerpost set vote = ? where id=?";
	db.execute(sql, [user.rating, user.id], function(status){
			callback(status);
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