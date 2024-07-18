import React, { useState, useContext } from 'react';
import '../StyleHome/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../ComponentsHome/CartContext'; 

const CustomNavbar = () => {  
  const [showCollapse, setShowCollapse] = useState(false);
  const { cart } = useContext(CartContext); 

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
            <Nav.Link as={Link} to="/Chi Siamo">Chi Siamo</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Catalogo">Catalogo e Offerte Videogiochi</Nav.Link>
            <Nav.Link as={Link} to="/Contattaci">Contattaci</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-count">{cart.length}</span> 
            </Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link> {/* Add login link */}
            <Nav.Link as={Link} to="/register">Register</Nav.Link> {/* Add register link */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
