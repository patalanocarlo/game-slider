import React from 'react';
import '../Style/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#games">Giochi</a></li>
        <li><a href="#news">Novità</a></li>
        <li><a href="#store">Contattaci</a></li>
        <li><a href="#support">Assistenza</a></li>
      </ul>
      <div className="navbar-auth">
        <a href="#login" className="auth-link">Accedi</a> | 
        <a href="#register" className="auth-link">Registrati</a>
      </div>
      <button className="preorder-button">Accedi al Carrello</button>
    </nav>
  );
}

export default Navbar;