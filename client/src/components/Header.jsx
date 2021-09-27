const Header = ({ products }) => {
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
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{`${product.title}`}</td>
                  <td>{1}</td>
                  <td>{`$${product.price}`}</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="3" className="total">
                Total: $
                {products
                  .map((product) => product.price)
                  .reduce((acc, num) => acc + num, 0)}
              </td>
            </tr>
          </tbody>
        </table>
        <a className="button checkout">Checkout</a>
      </div>
    </header>
  );
};

export default Header;
