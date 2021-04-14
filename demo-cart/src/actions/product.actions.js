export const SET_PRODUCT_DETAILS = 'Set product details';
export const SET_PRODUCTS = 'Set products';
export const SET_PRODUCT_CATAGORIES = 'Set product categories';
export const ADD_NEW_PRODUCT = 'Add new product';

const fetchData = async url => {
  const BASE_URL = 'https://fakestoreapi.com';
  try {
    const result = await fetch(`${BASE_URL}${url}`);
    return await result.json();
  } catch (error) {
    throw error;
  }
};

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const products = await fetchData('/products');
      return dispatch({ type: SET_PRODUCTS, payload: products });
    } catch (error) {}
  };
};

export const fetchCategories = () => {
  return async dispatch => {
    try {
      const categories = await fetchData('/products/categories');
      return dispatch({ type: SET_PRODUCT_CATAGORIES, payload: categories });
    } catch (error) {}
  };
};

export const setProductDetails = productDetails => {
  return { type: SET_PRODUCT_DETAILS, payload: productDetails };
};

export const fetchProductDetails = id => {
  return async dispatch => {
    try {
      const productDetails = await fetchData(`/products/${id}`);
      return dispatch(setProductDetails(productDetails));
    } catch (error) {}
  };
};

export const addNewProduct = product => {
  return async dispatch => {
    try {
      // eslint-disable-next-line no-unused-vars
      const newProduct = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify(product),
      });
      return dispatch({ type: ADD_NEW_PRODUCT, payload: product });
    } catch (error) {}
  };
};
