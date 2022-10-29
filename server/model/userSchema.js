const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

});

const User = mongoose.model('USER', userSchema);

module.exports = User;