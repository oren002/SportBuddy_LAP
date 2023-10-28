const User = require('../models/User');

const addToFavorites = async (req, res, next) => {
  console.log("addingtofav");
  const { username, id} = req.body;

  try {
    await User.updateOne( { username: username }, { $push: { Favorites: id } });
    res.json({ message: 'Activity added to favorites' });
  } catch (error) {
    next(error);
  }
};

const removeFromFavorites = async (req, res, next) => {
  console.log("removingfromfavourites");
  const { username, id } = req.body;

  try {
    await User.updateOne({ username: username }, { $pull: { Favorites: id } });
    res.json({ message: 'Activity removed from favorites' });
  } catch (error) {
    next(error);
  }
};

const updateUserRate = async (req, res, next) => {
  console.log("updatinguserrate");
  const { username, creator, rating} = req.body;

  try {
    const c = await User.find({username: creator, "reviews.user" :  username });
    console.log(c);
    if (c.length != 0) {
    
      try {
        await User.updateOne( { username: creator },{ $pull: { reviews: { user: username }} });
        try {
          await User.updateOne( { username: creator }, { $push: { reviews: {rate: rating, user: username }} });
          res.json({ message: 'Rating Updated' });
        } catch (error) {
          next(error);
        } 
      } catch (error) {
        next(error);
      }
    }
    else {
    
      try {
        await User.updateOne( { username: creator }, { $push: { reviews: {rate: rating, user: username }} });
        res.json({ message: 'Rating Updated' });
      } catch (error) {
        next(error);
      } 
    }
  } catch (error) {
    next(error);
  }
};

const isInFavorites = async (req, res, next) => {
  console.log("checking if in favorites");
  const { username, id } = req.body;

  try {
      const u = await User.findOne({username: username, Favorites: { $in: [id] }});
      if (u) res.json({ message: 'yes' });
      else res.json({ message: 'no' });
  } catch (error) {
      next(error);
  }
};

module.exports = { addToFavorites,removeFromFavorites, updateUserRate, isInFavorites };