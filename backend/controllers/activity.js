const Activity = require('../models/Activity');

const createActivity = async (req, res, next) => {
    console.log("creating Activity");
    const { creator, name, description, date, time, location, tot_participants, price } = req.body;

    try {
        const activity = new Activity({ creator, name, description, date, time, location, tot_participants, price });
        await activity.save();
        res.json({ message: 'New Activity created' });
    } catch (error) {
        next(error);
    }
  };

module.exports = { createActivity };