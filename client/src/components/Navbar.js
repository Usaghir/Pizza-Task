import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../global/CartContext';
import Logo from './Logo.png';
import './Component.css';

const Navbar = () => {
  const { shoppingCart } = useContext(CartContext);
  return (
    <nav class="navbar  fixed-top navbar-expand-lg navbar-pink bg-pink">
      <ul className="container">
        <li>
          <Link to="/" className=" ">
            <img
              className="navbar-brand mt-3   abc border-primary"
              src={Logo}
              alt="#"
              style={{ width: 150 }}
            />
          </Link>
        </li>
        <li>
          <div className="">
            <Link to="/">
              <div>Home</div>
            </Link>
          </div>
        </li>
        <li>
          <div className="">
            <Link to="/Menu">
              <div>Menu</div>
            </Link>
          </div>
        </li>
        <li>
          <div className="">
            <Link to="/about">
              <div>About Us</div>
            </Link>
          </div>
        </li>
        <li>
          <div className="">
            <Link to="/contact">
              <div>Contact</div>
            </Link>
          </div>
        </li>
        <li>
          <div className=" mr-3">
            <button className="btn btn-primary">
              <Link to="/MyOrder">
                <div>
                  my Order
                  <span className="badge badge-light badge-sm mt-2"></span>
                </div>
              </Link>
            </button>
          </div>
        </li>
        <li>
          <div className=" ">
            {shoppingCart.length ? (
              <button className="btn btn-primary">
                <Link to="/cart">
                  <i className="fas fa-cart-plus">
                    <span className="badge badge-light badge-sm mt-2">
                      {shoppingCart ? shoppingCart.length : 0}
                    </span>
                  </i>
                </Link>
              </button>
            ) : (
              ''
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
