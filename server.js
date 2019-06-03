const express = require('express');
const login = require('./routes/User_login.js');
const signup = require('./routes/User_signup.js');
const secret = require('./config/secret.js');
const bodyParser = require('body-parser');
var session = require('express-session');
const port = secret.port;

var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(login);
app.use(signup);

app.listen(port,function(){
    console.log(`server listening at ${port}`);
    
});