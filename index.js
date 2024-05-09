const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const router = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

//api
app.use("/api", router);

const PORT = 4000 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running....", PORT);
    console.log("db is connected");
  });
});
