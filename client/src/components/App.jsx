import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const App = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <ProductList />
        <AddProductForm />
      </main>
    </div>
  );
};

export default App;
