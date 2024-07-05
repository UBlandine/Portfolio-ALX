const mongoose = require('mongoose');
const   Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  firstname: {
    type: 'string',
    required: true,

  },
  lastname: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
    unique: true,
    
  },
  password: {
    type: 'string',
    required: true,
  
  }
});
const UserModel = mongoose.model("users", UserSchema); 
module.exports = UserModel;