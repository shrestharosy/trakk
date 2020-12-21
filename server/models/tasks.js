import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// turn schema to model
const TaskModel = mongoose.model("TaskModel", taskSchema);

export default TaskModel;
