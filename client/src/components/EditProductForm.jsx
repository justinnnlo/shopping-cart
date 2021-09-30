import { useState } from 'react';

const EditProductForm = ({ onFormSubmit, onClick, product }) => {
  const [name, setName] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  // const handleClick = (e) => {};

  const handleFormSubmit = (e) => {
    try {
      e.preventDefault();
      onFormSubmit({ ...product, title: name, price, quantity });
    } catch (err) {
      console.error(err);
    }
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
            <a href="#/" className="button" onClick={onClick}>
              Cancel
            </a>
          </div>
        </form>
      </>
    </div>
  );
};

export default EditProductForm;
