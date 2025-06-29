const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../data/users');

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY ;

// POST /register
router.post('/register', async (req, res) => {
  const { username, password, role = 'user' } = req.body;

  const existingUser = users.find(u => u.username === username);
  if (existingUser) return res.status(400).json({ message: 'Username already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const id = users.length + 1;
  users.push({ id, username, password: hashedPassword, role });
  res.status(201).json({ message: 'User registered successfully.' });
});

// POST /login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ accessToken: token });
});

module.exports = router;
