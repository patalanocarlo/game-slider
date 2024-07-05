import React from 'react';
import '../Style/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  return (
    <nav className="container navbar-container">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
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
  );
}

export default Navbar;