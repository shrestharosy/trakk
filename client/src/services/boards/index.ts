import { AxiosResponse } from 'axios';
import axios from 'utils/axios';

import { IBoard } from './types';

export async function getBoards() {
  try {
    const response : AxiosResponse<IBoard[]> = await axios('/boards');
    return response.data;
  } catch (error) {
    throw error;
  }
}
