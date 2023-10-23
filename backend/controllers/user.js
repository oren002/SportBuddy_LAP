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

module.exports = { addToFavorites };