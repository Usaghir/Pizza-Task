import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <ul className="container">
        <li>
          <Link to="/" className=" ">
            Top Pizza
          </Link>
        </li>
      </ul>
      <ul className="right">
        <li className="mr-4">
          <Link to="/cart">
            <i className="fas fa-cart-plus">cart</i>
            <span>0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
