import { combineReducers } from 'redux';
import { productRenducer } from './productReducer';
import { cartRenducer } from './cartReducer';

export const rootReducer = combineReducers({
  product: productRenducer,
  cart: cartRenducer,
});
