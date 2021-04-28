import { combineReducers } from 'redux';
import { productRenducer } from './productReducer';
import { cartRenducer } from './cartReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  product: productRenducer,
  cart: cartRenducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
