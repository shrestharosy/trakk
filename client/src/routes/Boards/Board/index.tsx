import { FC } from 'react';

import CardComponent from 'components/Card';
import { IBoard } from 'services/boards/types';

interface IBoardProps {
  board: IBoard;
  onDelete: (boardId: string) => Promise<void>;
}

const Board: FC<IBoardProps> = props => {
  const {
    board: { title, creator, createdAt, _id },
    onDelete,
  } = props;

  return (
    <CardComponent
      title={title}
      user={creator}
      date={createdAt}
      onDelete={() => onDelete(_id)}
    />
  );
};

export default Board;
