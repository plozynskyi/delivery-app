import { createSlice } from '@reduxjs/toolkit';
import { fetchShops } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const shopsSlice = createSlice({
  name: 'shops',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchShops.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchShops.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.error = null;
        store.items = payload.result;
      })
      .addCase(fetchShops.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});

export const shopsReducer = shopsSlice.reducer;
