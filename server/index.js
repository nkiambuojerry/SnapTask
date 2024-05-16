const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const Task = require("./model/taskModel.js");
const taskRoute = require("./routes/taskRoute.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use("/api/tasks", taskRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://basit1:basit123@cluster0.9voj9be.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3001, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });