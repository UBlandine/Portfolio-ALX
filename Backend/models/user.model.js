const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: "string",
  lastname: "string",
  email: "string",
  password: "string",
  
})
const userModel = mongoose.model("users", userSchema); 
module.exports = userModel;