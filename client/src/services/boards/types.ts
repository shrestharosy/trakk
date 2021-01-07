export interface IBoard {
  _id: string;
  title: string;
  creator: string;
  createdAt: string;
  tasks: Array<{}>;
}
