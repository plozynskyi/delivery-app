import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

const initialState = [];

const prodSlice = createSlice({
  name: 'prod',
  initialState,
  reducers: {
    addProd: {
      reducer: (state, { payload }) => {
        if (state.some(({ _id }) => _id === payload._id)) {
          const indx = state.findIndex(({ _id }) => _id === payload._id);
          state[indx].quantity += 1;
          return;
        }
        state.push({ ...payload, quantity: 1 });
        console.log(state);
      },
      prepare: data => {
        return {
          payload: {
            id: data._id,
            shopTitle: data.shopTitle,
            ...data,
          },
        };
      },
    },

    addQuantityProd: {
      reducer: (state, { payload }) => {
        const indx = state.findIndex(({ id }) => id === payload);

        state[indx].quantity = state[indx].quantity + 1;
      },
    },

    deleteProd: {
      reducer: (state, { payload }) => {
        const indx = state.findIndex(({ id }) => id === payload);
        if (state[indx].quantity === 1) {
          state.splice(indx, 1);
        } else {
          state[indx].quantity -= 1;
        }
      },
    },

    deleteAllProd: (state, { payload }) =>
      state.filter(({ _id }) => _id === payload),
  },
});

export const { addProd, addQuantityProd, deleteProd, deleteAllProd } =
  prodSlice.actions;
export const prodReducer = prodSlice.reducer;
