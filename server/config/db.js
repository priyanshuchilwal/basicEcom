const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/basicEcom");
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Database Error: " + error);
  }
};

module.exports = connectDB;
