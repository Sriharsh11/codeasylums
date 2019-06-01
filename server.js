const express = require('express');
const login = require('./routes/User_login.js');
const signup = require('./routes/User_signup.js');
const secret = require('./config/secret.js');
const port = secret.port;

app.use(login);
app.use(signup);

var app = express();

app.listen(port,function(){
    console.log(`server listening at ${port}`);
    
});