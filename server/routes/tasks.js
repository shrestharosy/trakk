import express from "express";

import {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/add", createTask);
router.delete("/:id", deleteTask);
router.post("/update/:id", updateTask);
router.get("/:id", getTaskById);

export default router;
