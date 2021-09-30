import Cart from './Cart';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { checkOut } from '../actions/cartActions';

const Header = ({ cartItems }) => {
  const dispatch = useDispatch();
  const onCheckoutCart = async () => {
    try {
      await axios.post(`/api/cart/checkout`);
      dispatch(checkOut());
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    onCheckoutCart();
  };
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            <Cart cartItems={cartItems} onCheckoutCart={onCheckoutCart} />
          </tbody>
        </table>
        <a className="button checkout" href="#/" onClick={handleClick}>
          Checkout
        </a>
      </div>
    </header>
  );
};

export default Header;
