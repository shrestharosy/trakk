import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useForm, FormProvider } from 'react-hook-form';

import Board from './Board';
import { createBoardAPI, getBoardsAPI } from 'services/boards';
import { IBoard } from 'services/boards/types';
import Loader from 'components/Loader';
import Popup from 'components/Popup';
import BoardForm, { IBoardFormValues } from './common/Form';

const Boards = () => {
  const methods = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [boards, setBoards] = useState<IBoard[]>([]);
  const [isAddBoardFormOpen, setIsAddBoardFormOpen] = useState(false);

  useEffect(() => {
    loadBoards();
  }, []);

  const loadBoards = async () => {
    try {
      setIsLoading(true);
      const response = await getBoardsAPI();
      setBoards(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const createBoard = async (values: IBoardFormValues) => {
    const { title, description } = values;
    try {
      await createBoardAPI({
        title,
        description,
        creator: 'dummy',
      });
      alert('Board created successfully');
      setIsAddBoardFormOpen(false);
      loadBoards();
    } catch (error) {
      alert('Error while creating board');
    }
  };

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={11}>
          <h1>Boards</h1>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<AddIcon />}
            onClick={() => setIsAddBoardFormOpen(true)}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      {isLoading && <Loader />}

      {!isLoading && boards.length === 0 ? (
        <span>No boards found</span>
      ) : (
        boards.map(board => <Board key={board._id} board={board} />)
      )}
      {isAddBoardFormOpen && (
        <Popup title={'Add board'} onClose={() => setIsAddBoardFormOpen(false)}>
          <FormProvider {...methods}>
            <BoardForm
              onCancel={() => setIsAddBoardFormOpen(false)}
              onConfirm={methods.handleSubmit(createBoard)}
            />
          </FormProvider>
        </Popup>
      )}
    </>
  );
};

export default Boards;
