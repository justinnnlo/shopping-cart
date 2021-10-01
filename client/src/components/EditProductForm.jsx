import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as productsActions from '../actions/productsActions';

const EditProductForm = ({ handleClick, product }) => {
  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const dispatch = useDispatch();
  const dispatchEditProduct = (product) => {
    dispatch(productsActions.productEdited(product));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatchEditProduct({ ...product, title: name, price, quantity });
    handleClick(e);
  };

  return (
    <div className="edit-form">
      <>
        <h3>Edit Product</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              value={price}
              onChange={({ target }) => setPrice(target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              value={quantity}
              onChange={({ target }) => setQuantity(target.value)}
            />
          </div>

          <div className="actions form-actions">
            <a
              href="#/"
              type="submit"
              className="button"
              onClick={handleFormSubmit}
            >
              Save
            </a>
            <a href="#/" className="button" onClick={handleClick}>
              Cancel
            </a>
          </div>
        </form>
      </>
    </div>
  );
};

export default EditProductForm;
