import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { shopsReducer } from './shops/slice';
// import { productsReducer } from './products/slice';
import { prodReducer } from './busket/busket-slice';

export const rootReducer = combineReducers({
  busket: prodReducer,
});

const persistConfig = {
  key: 'busket',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
