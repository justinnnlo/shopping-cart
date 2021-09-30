import * as types from '../constants/ActionTypes';

export const cartItemsReceived = (cartItems) => {
  return {
    type: types.CART_ITEMS_RECEIVED,
    payload: {
      cartItems,
    },
  };
};

export const cartItemAdded = (newCartItem) => {
  return {
    type: types.CART_ITEM_ADDED,
    payload: {
      newCartItem,
    },
  };
};

export const checkOut = () => {
  return {
    type: types.CHECKOUT,
    payload: {},
  };
};
