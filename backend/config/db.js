import mongoose from "mongoose";
// backend/config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://musaib:musaib123@localhost:5432/rozgaarhub', {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
 
