module.exports = {
    "up": "create table users (user_id int primary key auto_increment, firstName VARCHAR, lastName VARCHAR,phoneNo VARCHAR, username VARCHAR, password VARCHAR)",
    "down": "DROP TABLE users"
}