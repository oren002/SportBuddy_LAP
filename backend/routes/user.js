const express = require('express');
const { authenticate } = require('../middlewares/auth'); //middleware

const router = express.Router();

router.get('/profile', authenticate, (req, res) => { //next
  res.json({ 
    username: req.user.username,
    email: req.user.email,
    avatar: req.user.avatar
  });
});

module.exports = router;