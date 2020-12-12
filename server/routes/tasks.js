import express from "express";

import { getTasks, createTask } from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.get("/", createTask);

export default router;
