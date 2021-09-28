import { useState, useEffect } from "react";
import React from "react";
import services from "../services/productService";
import Header from "./Header";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(`in use effect`);
    const data = services.getAllProducts();
    setProducts(data);
  }, []);

  return (
    <div id="app">
      <Header products={products} />
      <ProductList products={products} />
      <AddProductForm />
    </div>
  );
};

export default App;
