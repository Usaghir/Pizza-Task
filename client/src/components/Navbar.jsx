import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { CartContext } from '../global/CartContext';
import topizza from './topizza.png';
import './Component.css';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const { shoppingCart } = useContext(CartContext);

  return (
    <Navbar expanded={expanded} onToggle={() => setExpanded(!expanded)} bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={topizza} alt="Topizza Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/menu" onClick={() => setExpanded(false)}>MENU</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>CONTACT</Nav.Link>
            <Nav.Link as={Link} to="/orderHistory" className="btn btn-outline-light" onClick={() => setExpanded(false)}>MY ORDER</Nav.Link>
            {shoppingCart.length > 0 && (
              <Nav.Link as={Link} to="/cart" className="btn btn-info" onClick={() => setExpanded(false)}>
                CART <span className="badge badge-light">{shoppingCart.length}</span>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
