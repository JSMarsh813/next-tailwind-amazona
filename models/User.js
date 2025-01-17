const mongoose = require("mongoose");

const UserSchema= new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,     
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

}, {timestamps:true})

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
