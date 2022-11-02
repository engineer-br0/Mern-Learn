const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

//connecting mongodb database
require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());

//connecting router
app.use(require('./router/auth'));

//Middleware

const middleware = (req, res, next) =>{
    console.log("hello from miidleware");
    next();
}

//routing
// app.get('/',  (req, res) =>{
//     res.send("hello from server home");
// })

app.get('/about', middleware, (req, res) =>{
    res.send("hello from about");
})

app.get('/contact', (req, res) =>{
    res.send("hello from contact");
})

app.get('/signin', (req, res) =>{
    res.send("hello from signin");
})

app.get('/signup', (req, res) =>{
    res.send("hello from signup");
})

app.listen(PORT, () =>{
    console.log(`server is runniing on PORT ${PORT}`);
})