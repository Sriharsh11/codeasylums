const router = require('express').Router();
const db = require('../models/mydb.js');
const bcrypt = require('bcrypt');
var session = require('express-session');

router.get('/signup',function(req,res){
    if(req.session && req.session.user){
        res.redirect('/dashboard');
    } else {
        res.render('register.ejs');
    }
});

router.post('/signup',function(req,res){
    console.log(req.body);
    
    // var user_id = req.body.user_id;
    var username = req.body.username;
    var password = req.body.password;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phoneNo = req.body.phoneNo;
    console.log(req.body.password);

    if(username && password){
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password,salt,function(err,hash){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(hash);
                    password = hash;
                    // var sql = 'INSERT INTO users (firstName, lastName, username, password, phoneNo) VALUES ('+ " + firstName + " + ','+ "+ lastName +"+ ','+ "+ username +"+ ',' + password + ',' + phoneNo + ')';
                    var sql = 'INSERT INTO users (firstName,lastName,username,password,phoneNo) VALUES ()'
                    db.query(sql,function(err,user){
                        if(err) console.log(err);
                        else{
                            console.log(user);
                            console.log("record saved");
                            req.session.user = user[0];
                            res.redirect('/dashboard');
                        }
                    });
                    db.end();
                }
            })
        })
    } else{
        res.send('please enter Username/Password');
    }
    // let hash = bcrypt.hash(password, 10,function(err,response){
    //     if(err) throw err;
    //     else{
    //         console.log(response);
    //         console.log('hash created successfully');
    //     }
    // });

})


module.exports = router ;
