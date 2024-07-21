const express = require("express");
const connectDB = require("./config/DB.js");
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Hello I am learning backend");
});
app.listen(4000, () => {
  console.log("Server is running at 4000 port");
});
