import express from "express";

import { createBoard, deleteBoard, getBoards } from "./controller";

const boardRouters = express.Router();

boardRouters.get("/", getBoards);
boardRouters.post("/add", createBoard);
boardRouters.delete("/:id", deleteBoard);

export default boardRouters;
