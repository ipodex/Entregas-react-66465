import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import iconoLogo from '../../assets/icono.png';
import cartIcon from '../../assets/cart-icon.png';
import './header.css';

export const Header = () => {
  const [cartCount, setCartCount] = useState(0); 

  return (
    <div> 
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt="Logo"
              src={iconoLogo} 
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            CPU HARDWARE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#cart" className="d-flex align-items-center">
                <img
                  src={cartIcon} 
                  alt="Carrito"
                  style={{ width: '24px', height: '24px', marginRight: '5px' }}
                />
                <Badge bg="secondary">{cartCount}</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

