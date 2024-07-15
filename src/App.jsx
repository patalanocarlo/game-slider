
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './ComponentsHome/MyNavbar';
import Home from './Gestione Pagine/Home';
import Footer from './ComponentsHome/FooterHomepage';
import Catalogo from './Gestione Pagine/Catalogo';

function App() {
  const apiKey = 'f511273fe9734983b1d420685c9477f5';
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home apiKey={apiKey} />} />
        <Route path="/Catalogo" element={<Catalogo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
