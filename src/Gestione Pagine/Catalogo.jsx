import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomCards from '../ComponentsCatalogo/CustomCarouseò';
import Gallerygame from '../ComponentsCatalogo/GalleryGame';
import Footer from '../ComponentsHome/FooterHomepage';
import MyRicercaCategoria from '../ComponentsCatalogo/MyRicercaperCategoria';
import GameShowcase from '../ComponentsCatalogo/GameShowCase';
import GameDetails from '../ComponentsCatalogo/GameDetails'; 

function Catalogo() {
  return (
    <div className="background page-container">
      <CustomCards />
      <MyRicercaCategoria />
      <Gallerygame />
      <GameShowcase />
      <Routes>
        <Route path="/Catalogo/game/:id" element={<GameDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Catalogo;
