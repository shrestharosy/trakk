import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  description: String,
  creator: String,
  status: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// turn schema to model
const TaskModel = mongoose.model("TaskModel", taskSchema);

export default TaskModel;
