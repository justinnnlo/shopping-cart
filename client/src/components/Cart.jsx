import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cartItemsReceived } from '../actions/cartActions';
import axios from 'axios';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllCartItems = async () => {
      try {
        const response = await axios.get('/api/cart');
        const cartItems = response.data;

        // dispatch({ type: 'CART_ITEMS_RECEIVED', payload: { cartItems } });
        dispatch(cartItemsReceived(cartItems));
      } catch (err) {
        console.error(err);
      }
    };
    getAllCartItems();
  }, [dispatch]);

  return (
    <>
      {cartItems.map((cartItem) => {
        return (
          <tr key={cartItem._id}>
            <td>{`${cartItem.title}`}</td>
            <td>{`${cartItem.quantity}`}</td>
            <td>{`$${cartItem.price}`}</td>
          </tr>
        );
      })}
      <tr>
        <td colSpan="3" className="total">
          Total: $
          {cartItems
            .map((cartItem) => cartItem.price * cartItem.quantity)
            .reduce((acc, num) => acc + num, 0)}
        </td>
      </tr>
      {/* <a className="button checkout" href="#/" onClick={handleClick}>
        Checkout
      </a> */}
    </>
  );
};

export default Cart;
