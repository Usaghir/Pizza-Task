import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import OrderHistory from './components/OrderHistory.jsx';
import ProductContextProvider from './global/ProductContext.jsx';
import CartContextProvider from './global/CartContext.jsx';
import Menu from './components/Menu.jsx';
import Cart from './components/Cart.jsx';
import NotFound from './components/NotFound.jsx';
import OrderForm from './components/OrderForm.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

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
              <Route path="/about" exact component={About} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/orderForm" exact component={OrderForm} />
              <Route path="/orderHistory" exact component={OrderHistory} />
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
