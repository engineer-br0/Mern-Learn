const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
   },
   tokens:[
      {
         token:{
         type: String,
         required: true
         }
      }
   ]
});

userSchema.pre('save',async function(next){
   //Do not declare methods using ES6 arrow functions (=>).
   // Arrow functions explicitly prevent binding this, so your method will not have access to the document
   //console.log("hello from pre save");
   if(this.isModified('password')){
      this.password = await bcrypt.hash(this.password, 0);
   }
   next();
   //console.log("hello from after save");
})

userSchema.methods.generateAuthToken = async function() {
   try{
      const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);
      this.tokens = [...this.tokens, {token:token}];
      await this.save();
      return token;

   }catch(err){
      console.log(err);
   }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;