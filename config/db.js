const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error, "error db");
  }
}

module.exports = connectDB;
