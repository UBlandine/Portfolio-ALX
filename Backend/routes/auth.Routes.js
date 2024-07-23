const express = require("express");
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/AuthValidation");
const { signup, login, logout } = require("../controllers/auth.controller");
const {
  trackLogin,
  trackLogout,
} = require("../middlewares/userActivity.Middlewares");
const router = express.Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);
router.post("/logout", trackLogout, logout);
module.exports = router;
