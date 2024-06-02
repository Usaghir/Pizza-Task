import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../global/CartContext';
import topizza from './logo.png';
import './NavBar.css';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const { shoppingCart } = useContext(CartContext);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-danger fixed-top shadow-sm'>
      <div className='container  margin-top'>
        <Link className='navbar-brand' to='/'>
          <img
            src={topizza}
            alt='Topizza Logo'
            className='navbar-logo mb-4'
            style={{ width: '50px' }}
          />
        </Link>
        <button
          className={`navbar-toggler ${expanded ? '' : 'collapsed'}`}
          type='button'
          onClick={handleToggle}
          aria-controls='navbarNav'
          aria-expanded={expanded ? 'true' : 'false'}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}
          id='navbarNav'
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link text-light' to='/' onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-light'
                to='/menu'
                onClick={closeMenu}
              >
                MENU
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-light'
                to='/contact'
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className=' btn bg-info mt-4 text-light'
                to='/orderHistory'
                onClick={closeMenu}
              >
                MY ORDER
              </Link>
            </li>
            {shoppingCart.length > 0 && (
              <li className='nav-item position-relative mt-1'>
                <Link
                  className='nav-link text-light position-relative'
                  to='/cart'
                  onClick={closeMenu}
                >
                  <i className='fas fa-shopping-cart'></i>
                  <span className='badge badge-light position-absolute'>
                    {shoppingCart.length}
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
