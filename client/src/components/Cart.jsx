const Cart = ({ cartItems, onCheckoutCart }) => {
  const handleClick = (e) => {
    e.preventDefault();

    onCheckoutCart();
  };

  return (
    <>
      {cartItems.map((cartItem) => {
        return (
          <>
            <tr key={cartItem.id}>
              <td>{`${cartItem.title}`}</td>
              <td>{`${cartItem.quantity}`}</td>
              <td>{`$${cartItem.price}`}</td>
            </tr>
          </>
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
      <a className="button checkout" href="#/" onClick={handleClick}>
        Checkout
      </a>
    </>
  );
};

export default Cart;
