import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { shopsReducer } from './shops/slice';
import { productsReducer } from './products/slice';
import { orderReducer } from './order/slice';
import persistedReducer from './root-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    shops: shopsReducer,
    products: productsReducer,
    busket: persistedReducer,
    order: orderReducer,
  },
  middleware,
});

export const persistStor = persistStore(store);
