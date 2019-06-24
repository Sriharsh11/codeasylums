const router = require('express').Router();
const db = require('../models/mydb.js');

router.get('/techSkills',function(req,res){
    res.render('Skills.ejs');
})

router.post('/techSkills',function(req,res){
    var skills = req.body.skills;
    var project = req.body.project;
    if(city && state && address && gender && pincode && nationality){
        var sql = "INSERT INTO users (skills, project) VALUES (skills, project)";
        db.query(sql, function(err,result){
            if(err) throw err;
            else{
                console.log(result);
                console.log('entry made');
            }
        })
    }
})