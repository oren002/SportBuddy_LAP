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

const joinActivity = async (req, res, next) => {
    console.log("joining Activity");
    const { username, id } = req.body;

    try {
        await Activity.updateOne( { _id: id }, { $push: { participants: username }, $inc: { participants_number: 1 } });
        res.json({ message: 'New Activity joined' });
    } catch (error) {
        next(error);
    }
  };

const forfeitActivity = async (req, res, next) => {
    console.log("forfeiting Activity");
    const { username, id } = req.body;

    try {
        await Activity.updateOne( { _id: id }, { $pull: { participants: username }, $inc: { participants_number: -1 } });
        res.json({ message: 'Activity forfeited' });
    } catch (error) {
        next(error);
    }
  };

module.exports = { createActivity, joinActivity, forfeitActivity };