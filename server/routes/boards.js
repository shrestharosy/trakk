import express from "express";
import { getBoards, createBoard } from "../controllers/boards.js";

const boardRouters = express.Router();

boardRouters.get("/", getBoards);
boardRouters.post("/add", createBoard);

export default boardRouters;
