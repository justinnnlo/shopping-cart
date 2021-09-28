import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product product={product} key={`productList${product.id}`} />;
      })}
    </div>
  );
};

export default ProductList;
