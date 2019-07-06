var db = require('./db');

module.exports={

	get: function(userId, callback){

		var sql = "select * from user where username=?";

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

	getAll2: function(callback){
		var sql = "SELECT * FROM userLogin where not usertype='admin' and not usertype='superadmin'  ";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},

//login purpose 

	insert0: function(user, callback){
		var sql = "INSERT INTO user values(null, ?, ?,?,?,?,?,?,?)";
		db.execute(sql, [user.firstname, user.lastname, user.username, user.email, user.phoneno, user.area, user.usertype, user.image], function(success){
			callback(success);
		});
	},
	insertLogin: function(user, callback){
		var sql = "INSERT INTO userlogin values(?, ?, ?,?)";
		db.execute(sql, [user.username, user.password, user.usertype, user.status], function(success){
			callback(success);
		});
	},
	validate: function(user, callback){
		var sql = "select * from userlogin where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){


            var resultconfirm= {
				 usertype: "",
                 status: "",
                 id :""
				};
			
			if(result.length > 0){
				var resultconfirm= {
				un : result[0].username,
				 usertype: result[0].usertype,
                 status: result[0].status
				};
				//console.log(x);
				
				callback(resultconfirm);

			}else{
				callback(resultconfirm);
			}
		});
	},
//ends




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


getNotice: function( callback){
		var sql = "select * from admin ";
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},

deleteNotice: function(id, callback){
		var sql = "delete from admin where id="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},

getNotice2: function( id, callback){
		var sql = "select post from admin where id="+id ;
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

},
getAdminList: function(callback){
		var sql = "select * from userlogin where usertype='admin' AND status='accept'" ;
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},	

getVolunteerList: function(callback){
		var sql = "select * from userlogin where usertype='volunteer' AND status='accept'" ;
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},

	getOwnerList: function(callback){
		var sql = "select * from userlogin where usertype='owner' AND status='accept'" ;
		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},
   getEventList: function(callback){
		var sql = "select * from eventmanage" ;

		db.getResult(sql, [], function(result){
			//console.log(result);
			callback(result);
		});
	},	

updateNotice: function(user, callback){
		var sql = "UPDATE admin set post = ? where id = ?";

		db.execute(sql, [user.post, user.id], function(status){
			callback(status);
		});
	},
	
}

