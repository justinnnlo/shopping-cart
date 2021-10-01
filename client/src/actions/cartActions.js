import * as types from '../constants/ActionTypes';
import apiClient from '../lib/apiClient';

export const cartItemsReceivedSuccess = (cartItems) => {
  return {
    type: types.CART_ITEMS_RECEIVED,
    payload: {
      cartItems,
    },
  };
};

export const cartItemAddedSuccess = (newCartItem) => {
  return {
    type: types.CART_ITEM_ADDED,
    payload: {
      newCartItem,
    },
  };
};

export const checkOutCartSuccess = () => {
  return {
    type: types.CHECKOUT,
    payload: {},
  };
};

export const cartItemAdded = (newCartItemData, callback) => {
  return function (dispatch) {
    apiClient.addToCart(newCartItemData, (newCartItem) => {
      dispatch(cartItemAddedSuccess(newCartItem));
    });
    if (callback) {
      callback();
    }
  };
};

export const cartItemsReceived = (callback) => {
  return function (dispatch) {
    apiClient.getCartItems((cartResponse) => {
      dispatch(cartItemsReceivedSuccess(cartResponse));
      if (callback) {
        callback();
      }
    });
  };
};

export const checkOutCart = (callback) => {
  return function (dispatch) {
    apiClient.checkOutCart(() => {
      dispatch(checkOutCartSuccess());
      if (callback) {
        callback();
      }
    });
  };
};
