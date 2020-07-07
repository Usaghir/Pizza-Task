import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
//import Home from './components/Home.js';
import ProductContextProvider from './global/ProductContext.js';
import CartContextProvider from './global/CartContext.js';
import Products from './components/Products.js';
import Cart from './components/Cart.js';
import NotFound from './components/NotFound.js';
import SubmitForm from './components/SubmitForm.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/order" exact component={SubmitForm} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
