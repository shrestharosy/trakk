import mongoose from "mongoose";

import { DONE, IN_PROGRESS, TO_DO } from "../constants/index.js";

const taskSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [TO_DO, IN_PROGRESS, DONE],
    required: true,
  },
  parentId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// turn schema to model
const TaskModel = mongoose.model("Task", taskSchema);

export default TaskModel;
