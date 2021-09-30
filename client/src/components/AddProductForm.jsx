import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions/productsActions';

const AddProductForm = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    console.log('clicked');
    setVisible(!visible);
  };

  const onFormSubmit = async (product) => {
    try {
      const response = await axios.post(`/api/products`, product);
      dispatch(actions.productAdded(response.data));
      setVisible(!visible);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = (e) => {
    try {
      e.preventDefault();
      onFormSubmit({ title: name, price, quantity });
    } catch (err) {
      console.error(err);
    }
  };

  const formVisible = visible ? 'add-form visible' : 'add-form';

  return (
    <div className={formVisible}>
      <p>
        <a
          className="button add-product-button"
          href="#/"
          onClick={handleClick}
        >
          Add A Product
        </a>
      </p>
      <>
        <h3>Add Product</h3>
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
              Add
            </a>
            <a href="#/" className="button">
              Cancel
            </a>
          </div>
        </form>
      </>
    </div>
  );
};

export default AddProductForm;
