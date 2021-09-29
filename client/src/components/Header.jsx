import Cart from './Cart';

const Header = ({ cartItems, onCheckoutCart }) => {
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
      </div>
    </header>
  );
};

export default Header;
