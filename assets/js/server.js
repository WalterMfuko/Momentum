// server.js
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Configure session middleware
app.use(session({
  secret: 'momentum-app-secret',
  resave: false,
  saveUninitialized: true
}));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Mock user data (later would be in a database)
const users = {
  'Jordan': {
    workoutsCompleted: 12,
    workoutMinutes: 450,
    currentStreak: 5,
    caloriesBurned: 3240,
    goal: 'Weight Loss - 15 lbs'
  },
  'Walter': {
    workoutsCompleted: 8,
    workoutMinutes: 320,
    currentStreak: 3,
    caloriesBurned: 2150,
    goal: 'Muscle Gain - 8 lbs'
  }
};

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/login', (req, res) => {
  const { username } = req.body;
  if (users[username]) {
    req.session.user = username;
    res.redirect('/dashboard');
  } else {
    res.redirect('/');
  }
});

app.get('/dashboard', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/');
  }
  
  const userData = users[req.session.user];
  res.render('dashboard', { 
    username: req.session.user,
    userData
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});