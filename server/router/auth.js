const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');

router.get('/',  (req, res) =>{
    res.send("hello from router home");

})

router.get('/register',  (req, res) =>{
    res.send("hello from router register");

})

router.post('/register', async (req, res) =>{
    console.log("res.body:", req.body);
    //res.send("rregister page");
    //res.json({message: req.body});
     
    const {name, email} = req.body.message;
    if(!name || !email){
        return res.status(422).send({error: "please fill all the mandatory fields"});
    }

    const user = new User({name : name, email});

    // user.save().then(() =>{
    //     res.json({message: "user successfully registered"})
    // }).catch((err) =>{
    //     res.json({error: "failed to register"})
    // })
     
    try{
        const userExist = await User.findOne({email: email});
        if(userExist){
            return res.status(422).send({error: "user already registered"});
        }

        const userRes = await user.save();

        if(userRes){
        res.send({message: "user successfully registered"})
        }
        else{
        res.send({error: "failed to register"})
        }
    } catch(err){
    console.log(err);
}

})

module.exports = router;