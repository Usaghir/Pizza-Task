import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <nav className="mt-5" style={{ background: '#318fb5', height: 200 }}>
        <ul className="contact-items row d-flex justify-content-center pt-5 mb-0">
          <li>
            <div className="mr-3">
              <i className="fas fa-envelope"></i>
            </div>
          </li>
          <li>
            <div className="mr-3">
              <i className="fab fa-linkedin"></i>
            </div>
          </li>
          <li>
            <div className="mr-3">
              <i className="fab fa-facebook-square"></i>
            </div>
          </li>
          <li>
            <div>
              <i className="fab fa-instagram-square"></i>
            </div>
          </li>
        </ul>

        <div className="contact-items row d-flex justify-content-center">
          {' '}
          {year}, All right reserved by ToPizza{' '}
        </div>
      </nav>
    );
  }
}

export default Footer;
