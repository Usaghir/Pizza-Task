import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <nav ClassName="mt-5" style={{ background: '#d79922', height: 200 }}>
        <ul class="contact-items row d-flex justify-content-center pt-5 mb-0">
          <li>
            <a href="mailto:info@topizza.com">
              <i class="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/usaghir/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="http://github.com/Usaghir" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://git.2020.school/raja_umer_saghir" target="_blank">
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
