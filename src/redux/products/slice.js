import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.error = null;
        store.items = payload.result;
      })
      .addCase(fetchProducts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
