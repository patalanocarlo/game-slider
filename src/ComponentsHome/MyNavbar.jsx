// src/ComponentsHome/MyNavbar.js
import React, { useState } from 'react';
import '../StyleHome/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {  
  const [showCollapse, setShowCollapse] = useState(false);
  const [cartCount, ] = useState(0); 

  const handleToggleCollapse = () => {
    setShowCollapse(!showCollapse);
  };

  return (
    <div className='custom-navbar'>
      <Navbar expand="lg" variant="dark" className="container">
        <Navbar.Brand as={Link} to="/">
          <img src="imagee" alt="Deco Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggleCollapse} />
        <Navbar.Collapse id="responsive-navbar-nav" className={showCollapse ? 'show' : ''}>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#link">Chi Siamo</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Catalogo">Catalogo e Offerte Videogiochi</Nav.Link>
            <Nav.Link href="#deets">Contattaci</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-count ">{cartCount}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
