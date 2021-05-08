const express = require('express');
const { hash, compare } = require('bcryptjs');
const router = express.Router();
const User = require('../config/modules/user')

router.get("/",(req,res)=>{
    user.find({},function(err,events){
        if(err) res.send(err)
        else res.send('no user found')
    })
})

router.post("/email",async (req,res)=>{
    
        const {username,password,email} = req.body
        const hasedPassword = await hash(password,10)
        const userWithEmail = await User.find({email}).exec();
        const userWithUser = await User.find({username}).exec();
        if(userWithEmail.length) return res.status(409).send('Email is already taken')
        if(userWithUser.length) return res.status(409).send('username is already taken')
        new User({username,password: hasedPassword,email}).save(function(err){
            if(!err) return res.status(200).send(`${username} was added`)
            
        })  
})

router.post("/facebook",async (req,res)=>{
    
    const {username,email} = req.body
    const userWithEmail = await User.find({email}).exec();
    const userWithUser = await User.find({username}).exec();
    if(userWithEmail.length) return res.status(409).send('Email is already taken')
    if(userWithUser.length) return res.status(409).send('username is already taken')
    new User({username,email}).save(function(err){
        if(!err) return res.status(200).send(`${username} was added`)
        
    })  
})


router.post("/1",async (req,res)=>{
    const user = req.body
    new User(user).save(function(err){
        if(err) console.log(err)
    })
})

module.exports = router