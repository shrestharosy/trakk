import express from "express";

import { getTasks, createTask, getTaskById } from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/add", createTask);
router.get("/:id", getTaskById);

export default router;
