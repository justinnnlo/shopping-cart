import axios from 'axios';
const baseUrl = process.env.REACT_APP_BACKEND_URL || '/api';

const apiClient = {
  getProducts: async (callback) => {
    try {
      const response = await axios.get(baseUrl + `/products`);
      return callback(response.data);
    } catch (e) {
      console.error(e);
    }
  },
  addProduct: async (product, callback) => {
    try {
      const response = await axios.post(baseUrl + `/products`, product);
      return callback(response.data);
    } catch (err) {
      console.error(err);
    }
  },
  editProduct: async (product, callback) => {
    try {
      const response = await axios.put(baseUrl + `/products/${product._id}`, {
        ...product,
      });
      return callback(response.data);
    } catch (err) {
      console.error(err);
    }
  },
  deleteProduct: async (productId, callback) => {
    try {
      await axios.delete(baseUrl + `/products/${productId}`);
      return callback(productId);
    } catch (err) {
      console.error(err);
    }
  },
  getCartItems: async (callback) => {
    try {
      const response = await axios.get(baseUrl + '/cart');
      return callback(response.data);
    } catch (err) {
      console.error(err);
    }
  },
  addToCart: async (product, callback) => {
    try {
      const response = await axios.post(baseUrl + `/cart`, {
        title: product.title,
        price: product.price,
        productId: product._id,
      });

      return callback(response.data);
      // dispatch(cartItemAdded(response.data));
    } catch (err) {
      console.error(err);
    }
  },
  checkOutCart: async (callback) => {
    try {
      await axios.post(baseUrl + `/cart/checkout`);
      return callback();
    } catch (error) {
      console.error(error);
    }
  },
};

export default apiClient;
