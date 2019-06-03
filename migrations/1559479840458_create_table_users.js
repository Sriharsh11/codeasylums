module.exports = {
    "up": "create table users (user_id int primary key auto_increment, firstName TEXT, lastName TEXT,phoneNo TEXT, username TEXT, password TEXT)",
    "down": "DROP TABLE users"
}