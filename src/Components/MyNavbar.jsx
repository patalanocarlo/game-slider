import React from 'react';
import '../Style/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../Images/glow.png'; 
import gifAnimated from '../Images/videos/giphy (1).gif';

const Navbar = () => {
  return (
    <div>
      <nav className="container-fluid navbar-container">
        <div className="navbar-logo">
          <img src={Image} alt="Logo" className="logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#games">Giochi</a></li>
          <li><a href="#store">Contattaci</a></li>
        </ul>
        <div className="navbar-auth">
          <a href="#login" className="auth-link">Accedi</a> | 
          <a href="#register" className="auth-link">Registrati</a>
        </div>
        <button className="preorder-button">Accedi al Carrello</button>
      </nav>
      <div className="gif-container">
        <img src={gifAnimated} alt="Animated GIF" className="animated-gif" />
      </div>
    </div>
  );
}

export default Navbar;