const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/registration'); // Adjust the path as necessary

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Registration endpoint
app.post('/register', (req, res) => {
  const { reguser, regphone, regemail, regpassword } = req.body;

  // Create a new user document based on the userModel schema
  userModel.create({ username: reguser, phone: regphone, email: regemail, password: regpassword })
    .then(user => {
      console.log('User registered:', user);
      res.json({ message: 'success' }); // Send response indicating success
    })
    .catch(err => {
      console.error('Error registering user:', err);
      res.status(500).json({ message: 'error' }); // Send response indicating error
    });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { phone, password } = req.body;

  // Find user by phone number and password
  userModel.findOne({ phone, password })
    .then(user => {
      if (user) {
        console.log('User logged in:', user);
        res.json({ message: 'success' }); // Send response indicating success
      } else {
        console.log('Login failed: Invalid credentials');
        res.status(401).json({ message: 'Invalid credentials' }); // Send response indicating login failure
      }
    })
    .catch(err => {
      console.error('Error logging in:', err);
      res.status(500).json({ message: 'error' }); // Send response indicating error
    });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});