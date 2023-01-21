const express = require("express")
const router = express.Router()
const User = require('../models/User')

router.get('/register',(req,res)=>{
    res.render('site/register')
})
router.post('/register',(req,res)=>{
    User.create(req.body,(error,user)=>{
        res.redirect('/')
        // console.log(req.body);
        
    })
   
})

router.get("/login", (req, res) => {
  // res.sendFile(path.resolve(__dirname,"site/about.html"))
  res.render("site/login");
})

router.post("/login", (req, res) => {
const {email,password} =req.body
User.findOne({email},(error,user)=>{
    if(user){
        if(user.password == password){
            //USER SESSİON
              console.log(user._id);
            req.session.userId = user._id
            res.redirect('/')
        }else{
            res.redirect('/users/login')
        }
    }else{
        res.redirect('/users/register')
    }
})
});


module.exports =router