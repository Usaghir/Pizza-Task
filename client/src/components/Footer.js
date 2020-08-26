import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <nav ClassName="mt-5" style={{ background: '#318fb5', height: 200 }}>
        <ul class="contact-items row d-flex justify-content-center pt-5 mb-0">
          <li>
            <a href="">
              <i class="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <i class="fab fa-instagram-square"></i>
            </a>
          </li>
        </ul>

        <div class="contact-items row d-flex justify-content-center">
          {' '}
          {year}, All right reserved by ToPizza{' '}
        </div>
      </nav>
    );
  }
}

export default Footer;
