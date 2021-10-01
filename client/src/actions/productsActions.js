import * as types from '../constants/ActionTypes';
import apiClient from '../lib/apiClient';

//synchronous actions
export const productAddedSuccess = (product) => {
  return {
    type: types.PRODUCT_ADDED,
    payload: { product: product },
  };
};
export const productsReceivedSuccess = (products) => {
  return {
    type: types.PRODUCTS_RECEIVED,
    payload: { products: products },
  };
};
export const productEditedSuccess = (product) => {
  return {
    type: types.PRODUCT_EDITED,
    payload: { editedProduct: product },
  };
};
export const productDeletedSuccess = (productId) => {
  return { type: types.PRODUCT_DELETED, payload: { productId } };
};

// async actions
export const productsReceived = (callback) => {
  return function (dispatch) {
    apiClient.getProducts((products) => {
      dispatch(productsReceivedSuccess(products));
      if (callback) {
        callback();
      }
    });
  };
};

export const productAdded = (productData, callback) => {
  return function (dispatch) {
    apiClient.addProduct(productData, (product) => {
      dispatch(productAddedSuccess(product));
      if (callback) {
        callback();
      }
    });
  };
};

export const productEdited = (productData, callback) => {
  return function (dispatch) {
    apiClient.editProduct(productData, (product) => {
      dispatch(productEditedSuccess(product));
      if (callback) {
        callback();
      }
    });
  };
};

export const productDeleted = (productId, callback) => {
  return function(dispatch) {
    apiClient.deleteProduct(productId, () => {
      dispatch(productDeletedSuccess(productId));
      if (callback) {
        callback();
      }
    });
  }
}
