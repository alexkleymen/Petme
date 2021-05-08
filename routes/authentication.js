const express = require('express');

const router = express.Router();

const User = require('../config/modules/user')

router.get("/",(req,res)=>{
    user.find({},function(err,events){
        if(err) res.send(err)
        else res.send('no user found')
    })
})

router.post("/",async (req,res)=>{
    const newT = new User ({user:'alex'})
    await newT.save()
    res.send('user added!')

})


module.exports = router