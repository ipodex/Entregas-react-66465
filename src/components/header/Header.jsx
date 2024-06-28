import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import iconoLogo from '../../assets/icono.png';
import cartIcon from '../../assets/cart-icon.png';
import './header.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext'; 

const Header = ({ toggleCart }) => { 
  const { cartCount } = useContext(CartContext); 

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
              <Link to="/about" className="nav-link">Home</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/ShoppingCart" className="nav-link d-flex align-items-center" onClick={toggleCart}>
                <img
                  src={cartIcon}
                  alt="Carrito"
                  style={{ width: '24px', height: '24px', marginRight: '5px' }}
                />
                <Badge bg="secondary">{cartCount}</Badge>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
