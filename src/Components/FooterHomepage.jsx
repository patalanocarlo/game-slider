import React from 'react';
import '../Style/FooterHome.css'; 

const Footer = () => {
    return (
      <footer className="footer bg-dark text-white pt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4 footer-links">
              <a href="#d" className="footer-link mx-2">INFORMATIVA LEGALE</a>
              <a href="#d" className="footer-link mx-2">TERMINI D'USO</a>
              <a href="#d" className="footer-link mx-2">INFORMATIVA SULLA PRIVACY</a>
              <a href="#d" className="footer-link mx-2">CONTATTACI</a>
              <a href="#d" className="footer-link mx-2">POLITICA SUI COOKIE</a>
              <a href="#d" className="footer-link mx-2">ASSISTENZA</a>
              <a href="#d" className="footer-link mx-2">CODICE DI CONDOTTA</a>
            </div>
          </div>
          <div className="row mb-4">
        
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