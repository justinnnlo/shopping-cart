import Product from './Product';

const ProductList = ({ products, onAddToCart, onEditProduct, onDeleteProduct }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            product={product}
            key={`productList${product._id}`}
            onAddToCart={onAddToCart}
            onEditProduct={onEditProduct}
            onDeleteProduct={onDeleteProduct}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
