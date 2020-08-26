import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../global/CartContext';
import Logo from './logo.png';
import './Component.css';

const Navbar = () => {
  const { shoppingCart } = useContext(CartContext);
  return (
    <nav class="navbar  fixed-top navbar-expand-lg  " style={{ background: '#474853' }}>
      <ul className="container">
        <li>
          <Link to="/" className=" ">
            <img
              className="navbar-brand mt-3 abc border-primary"
              src={Logo}
              alt="#"
              style={{ width: 150 }}
            />
          </Link>
        </li>
        <li>
          <div>
            <Link className="text-decoration-none" to="/">
              <div>HOME</div>
            </Link>
          </div>
        </li>
        <li>
          <div className="">
            <Link className="text-decoration-none" to="/Menu">
              <div>MENU</div>
            </Link>
          </div>
        </li>
        <li>
          <div className="">
            <Link className="text-decoration-none" to="/about">
              <div>ABOUT</div>
            </Link>
          </div>
        </li>
        <li>
          <div className="">
            <Link className="text-decoration-none" to="/contact">
              <div>CONTACT</div>
            </Link>
          </div>
        </li>
        <li>
          <div className=" mr-3">
            <button className="btn font-bebas" style={{ background: '#318fb5' }}>
              <Link className="text-decoration-none" to="/MyOrder">
                <div className=" ">
                  MY ORDER
                  <span className="badge badge-sm mt-2"></span>
                </div>
              </Link>
            </button>
          </div>
        </li>
        <li>
          <div className=" ">
            {shoppingCart.length ? (
              <button className="btn btn-primary font-bebas" style={{ background: '#318fb5' }}>
                <Link className="text-decoration-none" to="/cart">
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
