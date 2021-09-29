import { useState } from 'react';
import EditProductForm from './EditProductForm';

const Product = ({ product, onAddToCart, onEditProduct, onDeleteProduct }) => {
  const { title, quantity, price, _id } = product;
  const [visible, setVisible] = useState(false);

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
