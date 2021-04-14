import {
  SET_PRODUCT_DETAILS,
  SET_PRODUCTS,
  SET_PRODUCT_CATAGORIES,
  ADD_NEW_PRODUCT,
} from './../actions/product.actions';

const initialState = {
  items: [],
  categories: [],
  product: null,
  itemsLoaded: false,
};

export const productRenducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return { ...state, items: action.payload, itemsLoaded: true };
    }
    case ADD_NEW_PRODUCT: {
      const product = { id: state.items.length + 1, ...action.payload };
      return { ...state, items: [product, ...state.items] };
    }
    case SET_PRODUCT_CATAGORIES: {
      return { ...state, categories: action.payload };
    }
    case SET_PRODUCT_DETAILS: {
      return { ...state, product: action.payload };
    }
    default:
      return { ...state };
  }
};
