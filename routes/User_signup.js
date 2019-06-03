const router = require('express').Router();
const db = require('../models/mydb.js');
const bcrypt = require('bcrypt');

router.get('/signup',function(req,res){
    res.json('signup here');
});

router.post('/signup',function(req,res){
    console.log(req.body);
    
    var user_id = req.body.user_id;
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
                    var sql = "INSERT INTO users (user_id, firstName, lastName, username, password, phoneNo) VALUES (user_id, firstName, lastName, username, password, phoneNo)";
                    db.query(sql,function(err,result){
                        if(err) throw err;
                        else{
                            console.log(result);
                            console.log("record saved");
                            res.json('created');
                            // res.redirect('/dashboard');
                        }
                    });
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
