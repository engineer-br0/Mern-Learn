const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({path:"./config.env"});

const PORT = process.env.PORT;
console.log(PORT);

require('./db/conn');

//Middleware

const middleware = (req, res, next) =>{
    console.log("hello from miidleware");
    next();
}

app.get('/',  (req, res) =>{
    res.send("hello from server");
})

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
    console.log("server is runniing")
})