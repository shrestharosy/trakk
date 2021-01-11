import express from "express";
import { getBoards, createBoard, deleteBoard } from "../controllers/boards.js";

const boardRouters = express.Router();

boardRouters.get("/", getBoards);
boardRouters.post("/add", createBoard);
boardRouters.delete("/:id", deleteBoard);

export default boardRouters;
