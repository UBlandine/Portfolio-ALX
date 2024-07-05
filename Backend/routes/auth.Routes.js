const express = require('express');
const { signupValidation } = require('../Middlewares/AuthValidation');
const { signup } = require('../controllers/AuthController');
const router = express.Router();

router.post('/login', (req, res) => {
  res.send('login successful');
});

router.post('/signup', signupValidation, signup)

module.exports = router;
