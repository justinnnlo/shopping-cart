const Product = ({ product }) => {
  const { title, quantity, price } = product;

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{`$${price}`}</p>
        <p className="quantity">{`${quantity} left in stock`}</p>
        <div className="actions product-actions">
          <a href="#/" className="button add-to-cart">
            Add to Cart
          </a>
          <a href="#/" className="button edit">
            Edit
          </a>
        </div>
        <a href="#/" className="delete-button">
          <span>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
