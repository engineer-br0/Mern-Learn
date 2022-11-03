const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
   name:{
    type: String,
    required: true
   },
   email:{
      type: String,
      required: true
   },
   password:{
      type: String,
      required: true
   },
   work:{
      type: String,
      required: true
   }
});

// userSchema.pre('save',async (next)=>{
//    console.log("hello from pre save");
//    console.log(this.password);
//    if(this.isModified('password')){
//       this.password = await bcrypt.hash(this.password, 12);
//    }
//    next();
// })

const User = mongoose.model('USER', userSchema);

module.exports = User;