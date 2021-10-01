import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { cartItemsReceived } from '../actions/cartActions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllCartItems = async () => {
      try {
        dispatch(cartItemsReceived());
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
    </>
  );
};

export default Cart;
