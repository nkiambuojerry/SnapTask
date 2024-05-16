const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const Task = require("./model/taskModel.js");
const taskRoute = require("./routes/taskRoute.js");
const app = express();
require('dotenv').config();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use("/api/tasks", taskRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

const PORT = process.env.PORT;

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });