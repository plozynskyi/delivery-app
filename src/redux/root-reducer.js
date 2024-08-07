import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { prodReducer } from './busket/busket-slice';

export const rootReducer = combineReducers({
  busket: prodReducer,
});

const persistConfig = {
  key: 'busket',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
