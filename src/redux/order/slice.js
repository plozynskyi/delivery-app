import { createSlice } from '@reduxjs/toolkit';
import { addOrder } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addOrder.pending, store => {
        store.isLoading = true;
      })
      .addCase(addOrder.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.error = null;
        store.items.push(payload);
      })
      .addCase(addOrder.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const orderReducer = orderSlice.reducer;
