import React from 'react';
import '../StyleHome/FooterHome.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer bg-dark text-white pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4 footer-links">
              <Link to="/termini-duso" className="footer-link mx-2">TERMINI D'USO</Link>
              <Link to="/informativa-privacy" className="footer-link mx-2">INFORMATIVA SULLA PRIVACY</Link>
              <Link to="/Contattaci" className='footer-link mx-2'>CONTATTACI</Link>
              <Link to="/politica-cookie" className="footer-link mx-2">POLITICA SUI COOKIE</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center footer-text">
              <p>&copy; 2024 Sponsor Publishing, Inc. Tutti i videogiochi nel sito hanno un marchio registrato. Tutti gli altri marchi e nomi commerciali appartengono ai rispettivi proprietari.</p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
