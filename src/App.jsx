import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './ComponentsHome/MyNavbar';
import Home from './Gestione Pagine/Home';
import ContactUs from './ComponentsHome/Contattaci';
import Catalogo from './Gestione Pagine/Catalogo';
import BlackCellPage from './ComponentsHome/BlackCellPage';
import NierAutomataPage from './ComponentsHome/NierAutomataPage';
import LastOfUs2Page from './ComponentsHome/TheLastOfUs2';
import { CartProvider } from './ComponentsHome/CartContext';
import Cart from './ComponentsHome/Cart';
import HaloInfinite from './ComponentsHome/HaloInfinite';
import Presetazione from './Gestione Pagine/Presentazione';
import GameDetails from './ComponentsCatalogo/GameDetails'; 
import Login from './Login e Registrazione/Login';
import Register from './Login e Registrazione/Registrazione';

import TerminiDuso from './FooterInfo/TerminiDuso'; 
import InformativaPrivacy from './FooterInfo/Privacy'; 
import PoliticaCookie from './FooterInfo/PoliticaCookie'; 

function App() {
  const apiKey = 'f511273fe9734983b1d420685c9477f5';

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home apiKey={apiKey} />} />
          <Route path="/Catalogo" element={<Catalogo />} />
          <Route path="/Catalogo/game/:id" element={<GameDetails />} /> 
      
          <Route path="/game/blackcell" element={<BlackCellPage />} />
          <Route path="/game/nier-automata" element={<NierAutomataPage />} />
          <Route path="/game/last-of-us-2" element={<LastOfUs2Page />} />
          <Route path="/game/HaloPrew" element={<HaloInfinite />} />
          <Route path="/Chi Siamo" element={<Presetazione />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Contattaci" element={<ContactUs />} /> 
     
          <Route path="/termini-duso" element={<TerminiDuso />} />
          <Route path="/informativa-privacy" element={<InformativaPrivacy />} />
          <Route path="/politica-cookie" element={<PoliticaCookie />} />

        </Routes>
      
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
