var mysql = require('mysql');
var secret = require("../config/secret.js");


var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: secret.MysqlPassword
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  db.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

module.exports = db;