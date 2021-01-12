import { Request, Response } from "express";

import TaskModel from "./model";
import * as services from "./service";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = TaskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req: Request, res: Response) => {
  const taskDetails = req.body;
  const newTask = new TaskModel(taskDetails);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    const task = TaskModel.findById(taskId);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateTask = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const taskId = req.params.id;
    const { description, creator, status } = req.body;
    const task = await services.getTaskById(taskId);
    task.description = description;
    task.creator = creator;
    task.status = status;
    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.id;
    TaskModel.findByIdAndDelete(taskId);
    res.status(200).json("Task deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
