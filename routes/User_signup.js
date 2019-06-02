const router = require('express').Router();
const db = require('./models/mydb.js');

router.get('/signup',function(req,res){

})

router.post('/signup',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phoneNo = req.body.phoneNo;
    let hash = bcrypt.hashSync(password, 10);

    var sql = "INSERT INTO users (firstName, lastName, username, password, phoneNo) VALUES (firstName, lastName, username, password, phoneNo)";
    db.query(sql,function(err,result){
        if(err) throw err;
        else{
            console.log("record saved");
            res.redirect('/dashboard');
        }
    });

})

module.exports = router ;
