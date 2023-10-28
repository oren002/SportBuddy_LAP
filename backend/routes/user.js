const express = require('express');
const { authenticate } = require('../middlewares/auth'); //middleware
const { getReview } = require('../middlewares/user');
const { addToFavorites, removeFromFavorites, updateUserRate, isInFavorites } = require('../controllers/user'); 

const router = express.Router();

router.get('/profile', authenticate, (req, res) => { //next
  res.json({
    username: req.user.username,
    email: req.user.email,
    avatar: req.user.avatar,
    reviews: req.user.reviews
  });
});

router.post('/addtofav', addToFavorites);

router.post('/rmvfromfav',removeFromFavorites);

router.post('/isInFav', isInFavorites);

router.post('/rate', updateUserRate);

router.post('/rev', getReview, (req, res) => { //next
    res.json({ 
      reviews: req.rev.reviews
    });
});

module.exports = router;