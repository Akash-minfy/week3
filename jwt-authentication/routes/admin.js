const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const authorizeAdmin = require('../middlewares/authorizeAdmin');
const todos = require('../data/todos');

const router = express.Router();

// GET /api/admin/all-todos
router.get('/all-todos', authenticateToken, authorizeAdmin, (req, res) => {
  res.json(todos);
});

module.exports = router;
