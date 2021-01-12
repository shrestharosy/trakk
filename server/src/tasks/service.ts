import TaskModel from "./model";

export async function getTaskById(taskId: string) {
  try {
    const foundTask = await TaskModel.findById(taskId).exec();
    if (foundTask) {
      return foundTask;
    } else {
      throw new Error("Task not found");
    }
  } catch (error) {
    throw error;
  }
}
