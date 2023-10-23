const express = require('express');
const { authenticate } = require('../middlewares/auth'); //middleware
const { addToFavorites } = require('../controllers/user'); 

const router = express.Router();

router.get('/profile', authenticate, (req, res) => { //next
  res.json({ 
    username: req.user.username,
    email: req.user.email,
    avatar: req.user.avatar
  });
});
router.post('/addtofav', addToFavorites);

module.exports = router;