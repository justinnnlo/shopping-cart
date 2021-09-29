import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import Header from './Header';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleFormSubmit = async (product) => {
    try {
      const response = await axios.post(`/api/products`, product);
      setProducts(products.concat(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  const onAddToCart = async (product) => {
    try {
      // product = { ...product, productId: product.id };
      console.log(product);
      const response = await axios.post(`/api/cart`, {
        title: product.title,
        price: product.price,
        productId: product._id,
      });

      console.log('existing cart items:', cartItems);
      if (
        cartItems.find((cartItem) => {
          return cartItem.productId === product._id;
        })
      ) {
        setCartItems(
          cartItems.map((cartItem) => {
            return cartItem.productId === product._id
              ? response.data
              : cartItem;
          })
        );
      } else {
        setCartItems(cartItems.concat(response.data));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onEditProduct = async (product) => {
    try {
      console.log(product);
      const res = await axios.put(`/api/products/${product._id}`, {
        ...product,
      });
      const data = res.data;
      setProducts(
        products.map((p) => {
          if (p._id === product._id) {
            return data;
          } else return p;
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const onDeleteProduct = async (productId) => {
    try {
      const res = axios.delete(`/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (err) {
      console.error(err);
    }
  };

  const onCheckoutCart = async () => {
    try {
      axios.post(`/api/cart/checkout`);
      setCartItems([]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`/api/products`);

        setProducts(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    const getAllCartItems = async () => {
      try {
        const response = await axios.get('/api/cart');
        const cartItems = response.data;

        setCartItems(cartItems);
      } catch (err) {
        console.error(err);
      }
    };
    getAllCartItems();
  }, []);

  return (
    <div id="app">
      <Header cartItems={cartItems} onCheckoutCart={onCheckoutCart} />
      <main>
        <ProductList
          products={products}
          onAddToCart={onAddToCart}
          onEditProduct={onEditProduct}
          onDeleteProduct={onDeleteProduct}
        />
        <AddProductForm onFormSubmit={handleFormSubmit} />
      </main>
    </div>
  );
};

export default App;
