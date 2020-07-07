import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../global/CartContext';
import Logo from './Logo.png';

const Navbar = ({ cartToggle }) => {
  const { shoppingCart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg  bg-dark ">
      <ul className="container">
        <li>
          <Link to="/" className=" ">
            <img className="navbar-brand mt-3" src={Logo} alt="#" style={{ width: 150 }} />
          </Link>
        </li>
      </ul>
      <div className="right ">
        <button className="btn btn-primary" onClick={cartToggle}>
          <Link to="/cart">
            <i className="fas fa-cart-plus">
              <span className="badge badge-light badge-sm mt-2">
                {shoppingCart ? shoppingCart.length : 0}
              </span>
            </i>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
