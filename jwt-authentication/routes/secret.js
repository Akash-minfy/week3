const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

// GET /api/secret-quote
router.get('/secret-quote', authenticateToken, (req, res) => {
  res.json({ quote: "The secret to getting ahead is getting started." });
});

module.exports = router;
