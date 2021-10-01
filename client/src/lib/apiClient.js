import axios from 'axios';

const apiClient = {
  getProducts: async (callback) => {
    try {
      const response = await axios.get(`/api/products`);
      return callback(response.data);
    } catch (e) {
      console.error(e);
    }
  },
  addProduct: async (product, callback) => {
    try {
      const response = await axios.post(`/api/products`, product);
      return callback(response.data);
    } catch (err) {
      console.error(err);
    }
  },
  editProduct: async (product, callback) => {
    try {
      const response = await axios.put(`/api/products/${product._id}`, {
        ...product,
      });
      return callback(response.data);
    } catch (err) {
      console.error(err);
    }
  },
  deleteProduct: async (productId, callback) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      return callback(productId);
    } catch (err) {
      console.error(err);
    }
  },
  getCartItems: async (callback) => {
    try {
      const response = await axios.get('/api/cart');
      return callback(response.data);
    } catch (err) {
      console.error(err);
    }
  },
  addToCart: async (product, callback) => {
    try {
      const response = await axios.post(`/api/cart`, {
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
      await axios.post(`/api/cart/checkout`);
      return callback();
    } catch (error) {
      console.error(error);
    }
  },
};

export default apiClient;
