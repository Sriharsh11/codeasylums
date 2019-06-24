const router = require('express').Router();
const db = require('../models/mydb.js');

router.get('/profiling',function(req,res){
    res.render('Profiling.ejs');
})

router.post('/profiling',function(req,res){
   var linkedin = req.body.linkedin;
   var github = req.body.github;
   var hackerrank = req.body.hackerrank;
   var others = req.body.others;
   var sql = "INSERT INTO users (linkedin, github, hackerrank, others) VALUES (linkedin, github, hackerrank, others)";

   if(linkedin && github && hackerrank && others){
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