import { AxiosResponse } from 'axios';
import axios from 'utils/axios';

import { IBoard } from './types';

export async function getBoardsAPI() {
  try {
    const response: AxiosResponse<IBoard[]> = await axios('/boards');
    return response.data;
  } catch (error) {
    throw error;
  }
}

interface ICreateBoardParams {
  title: string;
  creator: string;
  description?: string;
}

export async function createBoardAPI(payload: ICreateBoardParams) {
  try {
    const response: AxiosResponse<IBoard> = await axios.post(
      'boards/add',
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteBoardAPI(boardId: string) {
  try {
    const response: AxiosResponse<IBoard> = await axios.delete(
      `boards/${boardId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
