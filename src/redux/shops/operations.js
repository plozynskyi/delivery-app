import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchShops = createAsyncThunk(
  'shops/fetchShops',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/shops`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
