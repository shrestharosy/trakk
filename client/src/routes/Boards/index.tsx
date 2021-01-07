import { useEffect, useState } from 'react';

import Board from './Board';
import { getBoards } from 'services/boards';
import { IBoard } from 'services/boards/types';
import Loader from 'components/Card/Loader';

const Boards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [boards, setBoards] = useState<IBoard[]>([]);

  useEffect(() => {
    loadBoards();
  }, []);

  const loadBoards = async () => {
    try {
      setIsLoading(true);
      const response = await getBoards();
      setBoards(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Board</h1>
      {isLoading && <Loader />}
      {!isLoading && boards.length == 0 ? (
        <span>No boards found</span>
      ) : (
        boards.map((board, index) => <Board key={board._id} board={board} />)
      )}
    </>
  );
};

export default Boards;
