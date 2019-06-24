const router = require('express').Router();
const db = require('../models/mydb.js');

router.get('/education',function(req,res){
    res.render('Education.ejs');
})

router.post('/education',function(req,res){
    var college = req.body.college;
    var programme = req.body.programme;
    var stream = req.body.stream;
    var pass_year = req.body.pass_year;
    if(college && programme && stream && pass_year){
        var sql = "INSERT INTO users (college, programme, stream, pass_year) VALUES (college, programme, stream, pass_year)"
        db.query(sql, function(err,result){
            if(err) throw err;
            else{
                console.log('entry created');
            }
        })
    } else{
        res.send('all fields required');
    }
})