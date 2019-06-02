var mysql = require('mysql');
var migration = require('mysql-migrations');
var secret = require('../config/secret.js');

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : secret.MysqlPassword,
  database : 'mydb'
},function(err){
    if(err) throw err;
    else{
        console.log("successfully updated");
    }
});

migration.init(connection, __dirname);