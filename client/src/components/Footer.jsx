import React from 'react';
import './Component.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer mb-0">
      <div className="container">
        <div className="row d-flex justify-content-center social-icons">
          <div className="col-auto">
            <a href="mailto:info@topizza.com" className="text-white mr-3">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://www.linkedin.com" className="text-white mr-3">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://www.facebook.com" className="text-white mr-3">
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://www.instagram.com" className="text-white">
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="mb-0">© {year} Topizza. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
