import { combineReducers } from 'redux';

// const rootReducer = ({reducer1, reducer2})
const rootReducer = (state = [], action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return state.concat(action.payload.products);
    }
    case 'PRODUCT_EDITED': {
      return state.map((product) => {
        if (product._id === action.payload.editedProduct._id) {
          return action.payload.editedProduct;
        } else {
          return product;
        }
      });
    }
    case 'PRODUCT_DELETED': {
      return state.filter(
        (product) => product._id !== action.payload.productId
      );
      // products.filter((product) => product._id !== productId)
    }
    default:
      return state;
  }
};

// const reducer = (state = [], action) => {
//   switch(action.type) {
//     case "ACTION_NAME":
//       return newState;
//     default:
//       return state
//   }
// }

export default rootReducer;
