import React, { useEffect, useState } from 'react';

import Board from './Board';
import { getBoards } from 'services/boards';
import { IBoard } from 'services/boards/types';
import Loader from 'components/Loader';
import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <h1>Boards</h1>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="primary" endIcon={<AddIcon />}>
            Add
          </Button>
        </Grid>
      </Grid>
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
