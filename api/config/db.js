const mongoose = require('mongoose');
require('dotenv').config()
const uri = process.env.KEY_DB

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;