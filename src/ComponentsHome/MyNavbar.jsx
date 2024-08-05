import React, { useState, useEffect, useContext } from 'react';
import '../StyleHome/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { CartContext } from '../ComponentsHome/CartContext';
import LogoHome from '../Images/LogoPrincipale.png';

const CustomNavbar = () => {
  const [showCollapse, setShowCollapse] = useState(false);
  const [username, setUsername] = useState('');
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken = decodeJWT(token);
      if (decodedToken && decodedToken.username) {
        setUsername(decodedToken.username);
      }
    }
  }, []);

  const decodeJWT = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  };

  const handleToggleCollapse = () => {
    setShowCollapse(!showCollapse);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUsername('');
    navigate('/login');
  };

  return (
    <div className='custom-navbar'>
      <Navbar expand="lg" variant="dark" className="container">
        <Navbar.Brand as={Link} to="/">
          <img src={LogoHome} alt="Deco Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggleCollapse} />
        <Navbar.Collapse id="responsive-navbar-nav" className={showCollapse ? 'show' : ''}>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Chi Siamo">Curiosità</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Catalogo">Catalogo e Offerte</Nav.Link>
            <Nav.Link as={Link} to="/Contattaci">Contattaci</Nav.Link>
            {username ? (
              <>
                <Nav.Link className="welcome-message">Benvenuto, {username}</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                <Nav.Link as={Link} to="/profile"> 
                  <FontAwesomeIcon icon={faUser} className="navbar-icon" />
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
              <span className="cart-count">{cart.length}</span>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
