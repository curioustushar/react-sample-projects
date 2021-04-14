import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
} from './../actions/cart.actions';

const initialState = { cartItems: [] };

export const cartRenducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const index = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );
      if (index < 0) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      } else {
        const items = state.cartItems.slice();
        items[index].quantity += 1;
        return {
          ...state,
          cartItems: items,
        };
      }
    }
    case DELETE_ITEM_FROM_CART: {
      const items = state.cartItems.filter(i => i.id !== action.payload.id);
      return { ...state, cartItems: items };
    }
    default:
      return { ...state };
  }
};
