import { ITask } from "./interface";
import mongoose from "mongoose";

import { DONE, IN_PROGRESS, TO_DO } from "../constants";

interface ITaskModel extends ITask, mongoose.Document {}

const taskSchema = new mongoose.Schema({
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
const TaskModel = mongoose.model<ITaskModel>("Task", taskSchema);

export default TaskModel;
