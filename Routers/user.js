const express = require('express');
const User = require('../Models/user');
const auth= require('../Middleware/auth')
require('../db/mongoose');
const router = new express.Router();

const user = router.post('/api/register',async (req,res)=>{
try{
    console.log('user',req.body)
    const user = new User(req.body);
    console.log('user',user)
    var userInfo = await user.save();
    res.send(userInfo)
}
catch(e){
    res.status(400).send(e);
}
})

const userLogin = router.post('/api/login',auth,async (req,res)=>{
try{
    console.log('user',req.body)
    const user = new User(req.body);
    console.log('user',user)
    var userInfo = await user.save();
    res.send(userInfo)
}
catch(e){
    res.status(400).send(e);
}
})
module.exports = user;