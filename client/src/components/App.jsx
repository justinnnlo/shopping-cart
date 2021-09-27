import { useState, useEffect } from "react";
import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import data from "../lib/data";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
