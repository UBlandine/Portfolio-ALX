const express = require('express');
require('dotenv').config(); // Correctly invoke the config method
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Add middleware to parse JSON requests

console.log('DATABASE URI:', process.env.DATABASE);

// CONNECT DATABASE
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
})
.then(() => console.log('Connected to DB...'))
.catch(err => console.error('Could not connect to DB...', err));

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello From Blando!');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Registration handle
app.post('/register', (req, res) => {
  UserModel.create(req.body)
    .then(user => res.json(user)) // Corrected response
    .catch(err => res.status(500).json(err)); // Added status code and corrected catch block
});

// Login handle
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email }) // Corrected syntax
    .then(user => {
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
    .catch(err => res.status(500).json(err));
});
