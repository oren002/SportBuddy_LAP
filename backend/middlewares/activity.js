const Activity = require('../models/Activity');

const getAgenda = async (req, res, next) => {
    console.log("getting agenda");
    const { username } = req.body;

    if (!username) {
      return res.status(401).json({ message: 'Error in loading Activities' });
    }

    try {
      const activities = await Activity.find({ creator: { $nin: [username] } });
      if (!activities) {
        return res.status(404).json({ message: 'No Activity found' });
      }

    req.items = activities;
    next();
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = { getAgenda };