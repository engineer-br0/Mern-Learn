const mongoose = require("mongoose");

const DB = process.env.DATA_BASE;

mongoose.connect(DB, {
    useUnifiedTopology:true,
    useNewUrlParser: true
}).then(() =>{
    console.log("hello from mongo atlas");
}).catch((err) =>{
    console.log(err);
})