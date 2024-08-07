import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllOrderUser = createAsyncThunk(
  'history/getAllOrderUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();

      axios.defaults.headers.authorization = `Bearer ${auth.token}`;

      const { data } = await axios.get(`/api/history`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
