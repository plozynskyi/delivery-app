import { createSlice } from '@reduxjs/toolkit';
import { getAllOrderUser } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const orderHistorySlice = createSlice({
  name: 'history',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllOrderUser.pending, store => {
        store.isLoading = true;
      })
      .addCase(getAllOrderUser.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.error = null;
        store.items = payload.result;
      })
      .addCase(getAllOrderUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const orderHistoryReducer = orderHistorySlice.reducer;
