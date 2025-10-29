// COONECTION FILE TO THE DATABASE
// ...existing code...
const mongoose = require('mongoose');

const connectDB = async (uri = process.env.MONGODB_URI) => {
  if (!uri) {
    console.error('Error: MONGODB_URI is not set in environment variables');
    process.exit(1);
  }

  try {
    // prevent deprecation warnings in Mongoose 6/7
    mongoose.set('strictQuery', false);

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
