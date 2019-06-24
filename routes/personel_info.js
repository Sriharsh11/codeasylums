const router = require('express').Router();
const db = require('../models/mydb.js');

router.get('/personelInfo',function(req,res){
    res.render('Personel_info.ejs');
})

router.post('/personelInfo',function(req,res){
    var city = req.body.city;
    var state = req.body.state;
    var address = req.body.address;
    var gender = req.body.gender;
    var pincode = req.body.pincode;
    var nationality = req.body.nationality;
    if(city && state && address && gender && pincode && nationality){
        var sql = "INSERT INTO users (city, state, address, gender, pincode, nationality) VALUES (city, state, address, gender, pincode, nationality)";
        db.query(sql, function(err,result){
            if(err) throw err;
            else{
                console.log(result);
                console.log('entry made');
            }
        })
    }
})