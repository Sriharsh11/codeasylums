const express = require('express');
const login = require('./routes/User_login.js');
const signup = require('./routes/User_signup.js');
const secret = require('./config/secret.js');
const bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
// const engine = require('ejs-mate');
const port = secret.port;

var app = express();

// app.engine('ejs',engine);
app.set('view engine','ejs');
// app.set('views','./views');

// app.use(express.static('public'));
app.use(express.static(__dirname + '/views'));
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