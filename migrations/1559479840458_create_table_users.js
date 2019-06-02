module.exports = {
    "up": "Alter table users ADD (firstName TEXT, lastName TEXT,phoneNo TEXT)",
    "down": "DROP TABLE users"
}