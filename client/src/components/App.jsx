import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const storeProducts = useSelector((state) => state);
  const handleFormSubmit = async (product) => {
    try {
      const response = await axios.post(`/api/products`, product);
      dispatch({
        type: 'PRODUCTS_RECEIVED',
        payload: { products: response.data },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onAddToCart = async (product) => {
    try {
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
      const res = await axios.put(`/api/products/${product._id}`, {
        ...product,
      });
      const data = res.data;
      // setProducts(
      //   products.map((p) => {
      //     if (p._id === product._id) {
      //       return data;
      //     } else return p;
      //   })
      // );
      dispatch({
        type: 'PRODUCT_EDITED',
        payload: { editedProduct: data },
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onDeleteProduct = async (productId) => {
    try {
      const res = axios.delete(`/api/products/${productId}`);
      // setProducts(products.filter((product) => product._id !== productId));
      dispatch({ type: 'PRODUCT_DELETED', payload: { productId } });
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

        //setProducts(response.data);
        // console.log('products:', response.data);
        dispatch({
          type: 'PRODUCTS_RECEIVED',
          payload: { products: response.data },
        });
      } catch (e) {
        console.log(e);
      }
    };
    getAllProducts();
  }, [dispatch]);

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
          products={storeProducts}
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
