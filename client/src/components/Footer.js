import React, { Component } from 'react';
import { Navbar, Container, Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
    let year = new Date().getFullYear();
    return (
      <Navbar fixed="" bg="dark" variant="dark">
        <Container>
          <Col lg={12} className="text-center text-muted">
            <div> {year}, All right reserved by ToPizza </div>
          </Col>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
