
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './ComponentsHome/MyNavbar';
import Home from './Gestione Pagine/Home';
import Footer from './ComponentsHome/FooterHomepage';
import Catalogo from './Gestione Pagine/Catalogo';
import BlackCellPage from './ComponentsHome/BlackCellPage';
import NierAutomataPage from './ComponentsHome/NierAutomataPage';
import LastOfUs2Page from './ComponentsHome/LastOfUs2Page';
function App() {
  const apiKey = 'f511273fe9734983b1d420685c9477f5';
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home apiKey={apiKey} />} />
        <Route path="/Catalogo" element={<Catalogo />} />
        <Route path="/game/blackcell" element={<BlackCellPage />} />
        <Route path="/game/nier-automata" element={<NierAutomataPage />} />
        <Route path="/game/last-of-us-2" element={<LastOfUs2Page />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
