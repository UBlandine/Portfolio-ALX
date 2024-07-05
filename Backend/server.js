const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const allRoutes = require("./Routes/auth.Routes");
const cors = require("cors");
const AuthRouter = require("./Routes/auth.Routes");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/auth", AuthRouter);

console.log("DATABASE URI:", process.env.DATABASE);

// CONNECT DATABASE
mongoose.set("debug", true);
mongoose
  .connect(process.env.DATABASE, {
    tlsAllowInvalidCertificates: true,
  })
  .then(() => console.log("Connected to DB..."))
  .catch((err) => console.error("Could not connect to DB...", err));

// Define your routes here
app.get("/", (req, res) => {
  res.send("Hello From Blando!");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Registration handle
app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
});

// Login handle
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.status(401).json("Password incorrect");
        }
      } else {
        res.status(404).json("User not found");
      }
    })
    .catch((err) => res.status(500).json(err));
});
app.use("/api/v1", allRoutes);
