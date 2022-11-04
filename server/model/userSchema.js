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

userSchema.pre('save',async function(next){
   //Do not declare methods using ES6 arrow functions (=>).
   // Arrow functions explicitly prevent binding this, so your method will not have access to the document
   console.log("hello from pre save");
   console.log(this.password);
   if(this.isModified('password')){
      this.password = await bcrypt.hash(this.password, 12);
   }
   next();
   console.log("hello from after save");
})

const User = mongoose.model('USER', userSchema);

module.exports = User;