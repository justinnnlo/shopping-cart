import * as types from '../constants/ActionTypes';
export const productAdded = (product) => {
  return {
    type: types.PRODUCT_ADDED,
    payload: { product: product },
  };
};
export const productsReceived = (products) => {
  return {
    type: types.PRODUCTS_RECEIVED,
    payload: { products: products },
  };
};
export const productEdited = (product) => {
  return {
    type: types.PRODUCT_EDITED,
    payload: { editedProduct: product },
  };
};
export const productDeleted = (productId) => {
  return { type: types.PRODUCT_DELETED, payload: { productId } };
};
