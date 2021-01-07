import { FC } from 'react';
import { IBoard } from 'services/boards/types';

interface IBoardProps {
  board: IBoard;
}

const Board: FC<IBoardProps> = props => {
  const {
    board: { title, creator, createdAt },
  } = props;
  return (
    <div>
      <div>title : {title}</div>
      <div>created by : {creator}</div>
    </div>
  );
};

export default Board;
