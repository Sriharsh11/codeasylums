const router = require('express').Router();
const db = require('./models/mydb.js');
const bcrypt = require('bcrypt');

router.get('/login',function(req,res){

})

router.post('/login',function(req,res){
    var username = req.body.username ;
    var password = req.body.password ; 
    if(username && password){
        db.query('SELECT * FROM users WHERE username = username',function(err,results,fields){
            if(results.length > 0){
                bcrypt.compare(password, hash, function(err,success){
                    if(success){
                        req.session.loggedin = true;
                        req.session.username = username;
                        res.redirect('/dashboard');
                    }
                    else{
                        res.send('Incorrect Password!');
                    }
                })
            } else{
                res.send('Incorrect Username');
            }
        });
    }
})

module.exports = router ;
