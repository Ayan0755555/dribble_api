const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

app.use(cors());

const PORT = 4000 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running....");
    console.log("db is connected");
  });
});
