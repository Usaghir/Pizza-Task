import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import MyOrder from './components/MyOrder.js';
import ProductContextProvider from './global/ProductContext.js';
import CartContextProvider from './global/CartContext.js';
import Menu from './components/Menu.js';
import Cart from './components/Cart.js';
import NotFound from './components/NotFound.js';
import SubmitForm from './components/SubmitForm.js';
import Footer from './components/Footer.js';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import SubmitMessage from './components/SubmitMessage.js';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/menu" exact component={Menu} />
              <Route path="/about" exact component={AboutUs} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/order" exact component={SubmitForm} />
              <Route path="/MyOrder" exact component={MyOrder} />
              <Route path="/submitMessage" exact component={SubmitMessage} />
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
