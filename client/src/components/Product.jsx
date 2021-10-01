import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditProductForm from './EditProductForm';
import * as productsActions from '../actions/productsActions';
import * as cartActions from '../actions/cartActions';

const Product = ({ product }) => {
  const { title, quantity, price, _id } = product;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.find((item) => {
      return item.productId === _id;
    })
  );

  const cartItemQuantity = cartItem ? cartItem.quantity : 0;

  const availableQuantity = quantity - cartItemQuantity;

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (availableQuantity === 0) return;
    dispatch(cartActions.cartItemAdded(product));
  };

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    dispatch(productsActions.productDeleted(_id));
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
        <p className="quantity">{`${availableQuantity} left in stock`}</p>
        <div className="actions product-actions">
          <a
            href="#/"
            className={
              availableQuantity === 0
                ? 'button add-to-cart disabled'
                : 'button add-to-cart'
            }
            onClick={handleAddToCart}
          >
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
        <EditProductForm product={product} handleClick={handleClick} />
      ) : null}
    </div>
  );
};

export default Product;
