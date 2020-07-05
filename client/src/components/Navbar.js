import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link to="/" className=" brand-logo">
          Top Pizza
        </Link>

        <ul className="right">
          <li className="mr-4">
            <Link to="/">Shop</Link>
          </li>
          <li className="mr-4">
            <Link to="/cart">My cart</Link>
          </li>
          <li className="">
            <Link to="/cart">
              <i className="fas fa-cart-plus">cart</i>
              <span>0</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
