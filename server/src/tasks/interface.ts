export interface ITask {
  description: string;
  creator: string;
  status: string;
  parentId: string;
  createdAt: Date;
}
