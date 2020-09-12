import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../global/CartContext.jsx';
import topizza from './topizza.png';
import './Component.css';

const Navbar = () => {
  const { shoppingCart } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg mob-height sticky" style={{ background: '#474853' }}>
      <ul className="container fle ">
        <li>
          <Link to="/" className=" ">
            <img
              className="navbar-brand abc border-primary"
              src={topizza}
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
          <div className="">
            <button className="btn font-bebas " style={{ width: '130px', background: '#318fb5' }}>
              <Link className="text-decoration-none" to="/orderHistory">
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
              <button
                className="btn btn-primary font-bebas "
                style={{ width: '130px', background: '#318fb5' }}
              >
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
