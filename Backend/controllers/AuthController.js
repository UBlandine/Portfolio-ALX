const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');

const signup = async (req, res) => {
  try {
    const {name, email, password} = req.body;

    //checking existing user
    const user = await UserModel.findOne({ email});
    if (user) {
      return res.status(400)
      .json({ msg: 'User already exists, you can login', sucess: false });
    }

    // creting new user
    const userModel = new UserModdel({ name, email, password });
    
    //hashing password
    userModel.password = await bcrypt.hash(password, 10);
   
    //saving user to database
    await userModel.save();

    //send successful response
    res.status(201)
    .json({
      message: 'Successfully signup',
      success: true
    })
  } catch (err) {

    // handle errors
    res.status(500)
    .json({
      message: "Internal Server Error",
      success: false,
    })

  }
}
module.exports = {
  signup
}