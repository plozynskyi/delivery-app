import { createSlice } from '@reduxjs/toolkit';
import { addOrder, getOrder } from './operations';

const initialState = {
  items: [],
  itemDetails: [],
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
      })

      .addCase(getOrder.pending, store => {
        store.isLoading = true;
      })
      .addCase(getOrder.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.error = null;
        store.itemDetails = [...payload.result.busket];
      })
      .addCase(getOrder.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const orderReducer = orderSlice.reducer;
