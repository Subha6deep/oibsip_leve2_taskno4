const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 6060;


app.use(express.static('public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In-memory user storage 
const users = [];


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Handle user registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  users.push({ username, email, password });

  res.status(201).json({ message: 'Registration successful' });
});

// Handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;


  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Login failed. Invalid credentials.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
