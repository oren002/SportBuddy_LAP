const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  creator: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String, //Mixed
    required: true,
  },
  participants: {
    type: Number,
    required: true,
    default: 0,
  },
  tot_participants: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

//custom instance methods

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;