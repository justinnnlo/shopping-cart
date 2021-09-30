import * as types from '../constants/ActionTypes';
const products = (state = [], action) => {
  switch (action.type) {
    case types.PRODUCTS_RECEIVED: {
      return state.concat(action.payload.products);
    }

    case types.PRODUCT_ADDED: {
      return state.concat(action.payload.product);
    }

    case types.PRODUCT_EDITED: {
      return state.map((product) => {
        if (product._id === action.payload.editedProduct._id) {
          return action.payload.editedProduct;
        } else {
          return product;
        }
      });
    }
    case types.PRODUCT_DELETED: {
      return state.filter(
        (product) => product._id !== action.payload.productId
      );
    }
    default:
      return state;
  }
};

export default products;
