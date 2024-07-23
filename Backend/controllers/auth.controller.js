const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log('Request body:', req.body); // Log the incoming request body

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists, you can login', success: false });
    }

    // Create new user
    const newUser = new UserModel({ name, email, password });

    // Hash password
    newUser.password = await bcrypt.hash(password, 10);
    console.log('Hashed password:', newUser.password); // Log the hashed password

    // Save user to database
    await newUser.save();

    // Send successful response
    res.status(201).json({
      message: 'Successfully signed up',
      success: true,
    });
  } catch (err) {
    // Handle errors
    console.error('Error during signup:', err); // Log the error
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// login the user
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Request body:', req.body); 

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(403).json({ msg: 'Auth failed or password is incorrect.', success: false });
    }
    // Send successful response
    const isPassEqual = await bcrypt.compare(password, user.password);
    if(!isPassEqual){
      return res.status(403)
       .json({ msg: 'Auth failed or password is incorrect.', success: false });
    }
    const jwtToken = jwt.sign({email: user.email, _id: user._id},
       process.env.JWT_SECRET,
       {expiresIn: '24h'}
    );
    res.status(200).json({
      message: 'Login Successfully',
      success: true,
      jwtToken,
      email,
      name: user.name
    });
  } catch (err) {
    
    // Handle errors
    console.error('Error during signup:', err); 
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const logout = async (req, res) => {
  try {
   
    // Respond with a success message
    res.status(200).json({
      message: 'Logout Successfully',
      success: true,
    });
  } catch (err) {
    // Handle errors
    console.error('Error during logout:', err);
    res.status(500).json({
      message: 'Internal Server Error',
      success: false,
    });
  }
};

module.exports = {
  signup,
  login,
  logout
};
