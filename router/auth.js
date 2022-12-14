const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/userSchema');
const Authenticate = require('../Middleware/Authenticate');

router.get('/',  (req, res) =>{
    res.send("hello from router home");
    
})


router.get('/register',  (req, res) =>{
    //res.cookie("jwtoken", token);
    res.send("hello from router register");
})

router.post('/register', async (req, res) =>{
    //console.log("req.body:", req.body);
    //res.json({message: req.body});
     
    const {name, email, password, work, from} = req.body;
    
    if(!name || !email || !password || !from || !work){
        return res.status(422).send({message: "please fill all the mandatory fields"});
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
            return res.status(422).send({message: "user already registered"});
        }
         
        
        //miidleware should be called for bcrypting
        const userRes = await user.save();
        //console.log(userRes.password);
        if(userRes){
        res.send({message: "user successfully registered"})
        }
        else{
        res.send({message: "failed to register"})
        }
    } catch(err){
    console.log(err);
}

})

router.post('/signin', async (req, res) =>{
    console.log(req.body);

    const { email, password} = req.body;

    if(!email || !password){
        return res.send({message: "please fill all mandatory fields"});
    }

    try{
    const userExist = await User.findOne({email: email});
    if(userExist){
        const passMatch = await bcrypt.compare(password, userExist.password);
        
        if(passMatch){ //successfully sign in

        const token = await userExist.generateAuthToken();
        res.cookie("jwtoken", token);
        console.log(userExist);
        return res.send({message : "User login successfully"});
        }
        else{
            res.send({message:"invalid password"}); //PS- instead print invalid credentials.
        }
    }
    else{
        return res.send({message:"user not registered"})
    }
    }catch(err){
        console.log(err);
    }
})

//about ka page
router.get('/about', Authenticate , (req, res) =>{
    console.log("hello from about");
    res.send(req.rootUser);
})

router.get('/pullDataFromMongo', Authenticate, (req, res) =>{
    console.log("hello from router contact");
    res.send(req.rootUser);
})

router.post('/pullDataFromMongo', Authenticate ,async (req, res) =>{
    console.log(req.body);
    //res.send({mess : 'hello we are sending your data', body : req.body});

    const {name, email, phone, message} = req.body;
    if(!email || !name || !phone || !message){
        return res.send({message :"please fill all the mandatory fields"});
    }

    const usr = await User.findOne({email : req.rootUser.email});
    const resp = await usr.addMessage({email, name, phone, message});
    return res.status(201).send({message : "message sent"});

});

router.get('/logout', (req, res) =>{
    try{
    res.clearCookie('jwtoken');
    res.status(200).send({mess :"logout successfully"});
    }
    catch(err){
        res.status(401).send({mess : "error"});
    }
})

module.exports = router;