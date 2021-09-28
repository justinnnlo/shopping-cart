import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Header from "./Header";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleFormSubmit = async (product) => {
    try {
      const response = await await axios.post(`/api/products`, product);
      setProducts(products.concat(response.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`/api/products`);
        const newResponse = response.data.map((product) => {
          return { ...product, id: product._id };
        });

        setProducts(newResponse);
      } catch (e) {
        console.log(e);
      }
    };
    getAllProducts();
  }, []);

  return (
    <div id="app">
      <Header products={products} />
      <ProductList products={products} />
      <AddProductForm onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
