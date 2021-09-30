import {
  CART_ITEMS_RECEIVED,
  CART_ITEM_ADDED,
  CHECKOUT,
} from '../constants/ActionTypes';

const cart = (state = [], action) => {
  switch (action.type) {
    case CART_ITEMS_RECEIVED: {
      return state.concat(action.payload.cartItems);
    }
    case CART_ITEM_ADDED: {
      const newCartItem = action.payload.newCartItem;
      if (
        state.find((cartItem) => {
          return cartItem.productId === newCartItem.productId;
        })
      ) {
        return state.map((cartItem) => {
          return cartItem.productId === newCartItem.productId
            ? newCartItem
            : cartItem;
        });
      } else {
        return state.concat(newCartItem);
      }
    }
    case CHECKOUT: {
      return [];
    }
    default:
      return state;
  }
};

export default cart;
