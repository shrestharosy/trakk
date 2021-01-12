import express from "express";

import {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "./controller";

const taskRouters = express.Router();

taskRouters.get("/", getTasks);
taskRouters.post("/add", createTask);
taskRouters.delete("/:id", deleteTask);
taskRouters.post("/update/:id", updateTask);
taskRouters.get("/:id", getTaskById);

export default taskRouters;
