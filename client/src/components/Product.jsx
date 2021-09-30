import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import EditProductForm from './EditProductForm';
// import * as cartActions from '../actions/cartActions';
import * as productsActions from '../actions/productsActions';
import { cartItemAdded } from '../actions/cartActions';

const Product = ({ product }) => {
  const { title, quantity, price, _id } = product;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const onAddToCart = async (product) => {
    try {
      const response = await axios.post(`/api/cart`, {
        title: product.title,
        price: product.price,
        productId: product._id,
      });

      dispatch(cartItemAdded(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  const onEditProduct = async (product) => {
    try {
      const response = await axios.put(`/api/products/${product._id}`, {
        ...product,
      });
      dispatch(productsActions.productEdited(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  const onDeleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      dispatch(productsActions.productDeleted(productId));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddToCart = (e) => {
    try {
      e.preventDefault();

      onAddToCart(product);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditProduct = (product) => {
    console.log('edit');
    try {
      onEditProduct(product);
      setVisible(!visible);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = (e) => {
    e.preventDefault();

    try {
      onDeleteProduct(_id);
    } catch (err) {
      console.error(err);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{`$${price}`}</p>
        <p className="quantity">{`${quantity} left in stock`}</p>
        <div className="actions product-actions">
          <a href="#/" className="button add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </a>
          <a href="#/" className="button edit" onClick={handleClick}>
            Edit
          </a>
        </div>
        <a href="#/" className="delete-button" onClick={handleDeleteProduct}>
          <span>X</span>
        </a>
      </div>
      {visible ? (
        <EditProductForm
          product={product}
          onFormSubmit={handleEditProduct}
          onClick={handleClick}
        />
      ) : null}
    </div>
  );
};

export default Product;
