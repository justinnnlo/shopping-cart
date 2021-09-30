import Product from './Product';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/productsActions';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`/api/products`);

        dispatch(actions.productsReceived(response.data));
      } catch (e) {
        console.error(e);
      }
    };
    getAllProducts();
  }, [dispatch]);
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product product={product} key={`productList${product._id}`} />;
      })}
    </div>
  );
};

export default ProductList;
