const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://kshivanya82:GNrIjsmtGUs9fMFT@cluster0.wkexznv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    const connect = mongoose.connect(dbUrl);
    if (connect) {
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
