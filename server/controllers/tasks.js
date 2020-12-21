import TaskModel from "../models/tasks.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const taskDetails = req.body;
  const newTask = new TaskModel(taskDetails);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await TaskModel.findById(taskId);
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
