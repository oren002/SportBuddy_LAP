const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env.MONGODB_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;