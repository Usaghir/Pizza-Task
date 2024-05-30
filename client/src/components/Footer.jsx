import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-danger text-white py-4">
  <div className="container text-center">
    <div className="">
      <a href="mailto:info@topizza.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://www.facebook.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-square fa-2x"></i>
      </a>
      <a href="https://www.instagram.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram-square fa-2x"></i>
      </a>
    </div>
    <p className="mb-0 py-3">© {new Date().getFullYear()} Topizza. All rights reserved.</p>
  </div>
</footer>

  );
};

export default Footer;
