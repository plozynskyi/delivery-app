import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addOrder = createAsyncThunk(
  'order/addOrder',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await axios.post(`/api/order`, data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrder = createAsyncThunk(
  'order/getOrder',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/order/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
