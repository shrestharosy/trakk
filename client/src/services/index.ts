import axios from 'utils/axios';

export async function getTasks() {
  try {
    const response = await axios('/tasks');
    return response.data;
  } catch (error) {
    throw error;
  }
}
