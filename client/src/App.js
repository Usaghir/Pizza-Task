import React from 'react';
import Navbar from './components/Navbar.js';
//import Home from './components/Home.js';
import ProductContextProvider from './global/ProductContext.js';
import Products from './components/Products.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductContextProvider>
        <Products />
      </ProductContextProvider>
    </div>
  );
}

export default App;
