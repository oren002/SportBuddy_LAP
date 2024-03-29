const express = require('express');
const connectDB = require('./mongoDB/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const activityRoutes = require('./routes/activity');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());
app.use(cors());

// Define routes
app.use('/auth', authRoutes);
app.use('/activity', activityRoutes);

// Define routes (middleware)
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;