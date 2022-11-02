const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');

router.get('/',  (req, res) =>{
    res.send("hello from router home");

})

router.get('/register',  (req, res) =>{
    res.send("hello from router register");

})

router.post('/register', (req, res) =>{
    console.log(req.body);
    //res.send("rregister page");
    //res.json({message: req.body});

    const user = new User({name : req.body.name});

    user.save().then(() =>{
        res.json({message: "user successfully registered"})
    }).catch((err) =>{
        res.json({error: "failed to register"})
    })

})

module.exports = router;