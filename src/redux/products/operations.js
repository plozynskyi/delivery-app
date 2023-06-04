import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://delivery-rest-api.onrender.com';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (shopId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/products/${shopId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
