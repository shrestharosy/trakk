import CardComponent from 'components/Card';
import { FC } from 'react';
import { IBoard } from 'services/boards/types';

interface IBoardProps {
  board: IBoard;
}

const Board: FC<IBoardProps> = props => {
  const {
    board: { title, creator, createdAt },
  } = props;
  return <CardComponent title={title} user={creator} date={createdAt} />;
};

export default Board;
