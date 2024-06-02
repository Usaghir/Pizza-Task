import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar.jsx';
import OrderHistory from './components/OrderHistory.jsx';
import ProductContextProvider from './global/ProductContext.jsx';
import CartContextProvider from './global/CartContext.jsx';
import Menu from './components/Menu.jsx';
import Cart from './components/Cart.jsx';
import NotFound from './components/NotFound.jsx';
import OrderForm from './components/OrderForm.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
//import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <CustomNavbar />
            <div className="main-content">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/menu" exact element={<Menu />} />
                {/* <Route path="/about" exact element={<About />} /> */}
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/cart" exact element={<Cart />} />
                <Route path="/orderForm" exact element={<OrderForm />} />
                <Route path="/orderHistory" exact element={<OrderHistory />} />
                <Route element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
