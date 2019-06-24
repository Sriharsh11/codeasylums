const router = require('express').Router();
const db = require('../models/mydb.js');

router.get('/work',function(req,res){
    res.render('Work.ejs');
})

router.post('/work',function(req,res){
   var company = req.body.company;
   var workCity = req.body.workCity;
   var experience = req.body.experience;
   var programme_mode = req.body.programme_mode;
   var sql = "INSERT INTO users (company, workCity, experience, programme_mode) VALUES (company, workCity, experience, programme_mode)";

   if(company && workCity && experience && programme_mode){
    db.query(sql,function(err,result){
        if(err) throw err;
        else{
            console.log('entry made');
        }
    })
   } else{
       res.send('all fields required');
   }
})