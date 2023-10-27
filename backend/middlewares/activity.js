const Activity = require('../models/Activity');
const User = require('../models/User'); // Make sure to import the User model

const getAgenda = async (req, res, next) => {
    console.log("getting agenda");
    const { username } = req.body;

    if (!username) {
      return res.status(401).json({ message: 'Error in loading Activities' });
    }

    try {
      const activities = await Activity.find({ creator: { $nin: [username] }, participants: { $in: [username] } });
      if (!activities) {
        return res.status(404).json({ message: 'No Activity found' });
      }

    req.items = activities;
    next();
    } catch (error) {
      next(error);
    }
  };

  const searchActivities = async (req, res, next) => {
    console.log("searching activities");
    const { username, location } = req.body;

    if (!username) {
      return res.status(401).json({ message: 'Error in loading Activities' });
    }

    if (location!="") {
      // filter by location
    }

    try {
      const activities = await Activity.find({ creator: { $nin: [username] }, participants: { $nin: [username] }  });
      if (!activities) {
        return res.status(404).json({ message: 'No Activity found' });
      }

    req.items = activities;
    next();
    } catch (error) {
      next(error);
    }
  };

  const getMyActivities = async (req, res, next) => {
    console.log("getting user activities");
    const { username } = req.body;

    if (!username) {
      return res.status(401).json({ message: 'Error in loading Activities' });
    }

    try {
      const activities = await Activity.find({ creator: { $in: [username] } });
      if (!activities) {
        return res.status(404).json({ message: 'No Activity found' });
      }

    req.items = activities;
    next();
    } catch (error) {
      next(error);
    }
  };

  const getFavActivities = async (req, res, next) => {
    console.log("Getting user's favorite activities");
    const { username } = req.body;

    if (!username) {
        return res.status(401).json({ message: 'Error in loading Activities' });
    }

    try {
        //const user = await User.findOne({ username }); // Fix the typo here: user -> User
        const user = await User.findOne({ username }).populate('Favorites');

        if (!user || !user.Favorites || user.Favorites.length === 0) {
            return res.status(404).json({ message: 'User has no favorite activities' });
        }


        // Fetch activities where the id is in the user's Favorites array
        const favoriteActivities = await Activity.find({ _id: { $in: user.Favorites } });

        if (!favoriteActivities || favoriteActivities.length === 0) {
            console.log('No favorite activities found for user:', username);
            return res.status(404).json({ message: 'No favorite activities found' });
        }

        req.items = favoriteActivities;
        next();
    } catch (error) {
        console.error('Error fetching favorite activities:', error);
        next(error);
    }
};

const getPastActivities = async (req, res, next) => {
  console.log("Getting user activities");

  const { username } = req.body;

  if (!username) {
    return res.status(401).json({ message: 'Error in loading Activities. Username is missing.' });
  }

  try {
    // Use the current date and time as the "clickDate"
    const currentDate = new Date();
    console.log('Current Date:', currentDate.toISOString()); // Log for verification

    // Print the MongoDB query being executed
    const activities = await Activity.find({
      date: { $lt: currentDate.toISOString() },
      participants: { $in: [username] }
    });

    console.log('Activities:', activities);

    if (!activities || activities.length === 0) {
      return res.status(404).json({ message: 'No Activity found for the given criteria.' });
    }

    req.items = activities;
    next();
  } catch (error) {
    console.error('Error in getPastActivities:', error);
    next(error);
  }
};







  
  
  
  module.exports = { getAgenda, searchActivities, getMyActivities, getFavActivities, getPastActivities };