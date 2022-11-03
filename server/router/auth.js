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
    console.log("req.body:", req.body);
    //res.json({message: req.body});
     
    const {name, email, password, work, from} = req.body.message;
    if(!name || !email || !password){
        return res.status(422).send({error: "please fill all the mandatory fields"});
    }

    //creating new user 
    const user = new User({name : name, email, work, from, password});

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
         
        
        //miidleware should be called for bcrypting
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

router.post('/signin', async (req, res) =>{
    console.log(req.body);

    const { email, password} = req.body;

    if(!email || !password){
        return res.send("please fill all mandatory fields");
    }

    try{
    const userExist = await User.findOne({email: email, password:password});

    if(userExist){
        console.log(userExist);
        return res.send(userExist);
    }
    else{
        return res.send("username/ password is incorrect")
    }
    }catch(err){
        console.log(err);
    }
})

module.exports = router;