export const ADD_ITEM_TO_CART = 'Add item to cart';
export const DELETE_ITEM_FROM_CART = 'Delete item from cart';

export const addItemToCart = item => {
  return { type: ADD_ITEM_TO_CART, payload: item };
};

export const deleteItemFromCart = item => {
  return { type: DELETE_ITEM_FROM_CART, payload: item };
};
