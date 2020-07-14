import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../global/CartContext';
import Logo from './Logo.png';
import { Navbar } from 'react-bootstrap';

const NavbarTop = () => {
  const { shoppingCart } = useContext(CartContext);
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <ul className="container">
        <li>
          <Link to="/" className=" ">
            <img className="navbar-brand mt-3" src={Logo} alt="#" style={{ width: 150 }} />
          </Link>
        </li>
      </ul>
      <div className="right mr-3">
        <button className="btn btn-primary">
          <Link to="/MyOrder">
            <div>
              my Order
              <span className="badge badge-light badge-sm mt-2"></span>
            </div>
          </Link>
        </button>
      </div>
      <div className="right ">
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
    </Navbar>
  );
};

export default NavbarTop;
