import { FC } from 'react';

import CardComponent from 'components/Card';
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
