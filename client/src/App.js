import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import OrderHistory from './components/OrderHistory';
import ProductContextProvider from './global/ProductContext';
import CartContextProvider from './global/CartContext';
import Menu from './components/Menu';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './components/Component.css'; // Import your CSS file

function App() {
  return (
    <div className="app">
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <CustomNavbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/orderForm" element={<OrderForm />} />
                <Route path="/orderHistory" element={<OrderHistory />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
