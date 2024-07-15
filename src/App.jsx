import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/MyNavbar';
import Home from './Gestione Pagine/Home';
import Footer from './Components/FooterHomepage';

function App() {
  const apiKey = 'f511273fe9734983b1d420685c9477f5';
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home apiKey={apiKey} />} />
    
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;