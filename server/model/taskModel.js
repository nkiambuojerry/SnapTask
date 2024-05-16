const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter task title"],
        },
        description: {
            type: String,
            required: [true, "Please enter task description"],
        },
        userCode: {
            type: String,
            required: [true, "Please enter user code"],
        }
    },
    {
        timestamps: true,
    }
);


const Task = mongoose.model("task", taskSchema);

module.exports = Task;