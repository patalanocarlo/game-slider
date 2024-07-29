import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomCards from '../ComponentsCatalogo/CustomCarouseò';
import Gallerygame from '../ComponentsCatalogo/GalleryGame';
import Footer from '../ComponentsHome/FooterHomepage';
import MyRicercaCategoria from '../ComponentsCatalogo/MyRicercaperCategoria';
import GameShowcase from '../ComponentsCatalogo/GameShowCase';


function Catalogo() {
  return (
    <div className="background page-container">
      <CustomCards />
      <MyRicercaCategoria />
      <Gallerygame />
      <GameShowcase />
      <Routes>
 
      </Routes>
      <Footer />
    </div>
  );
}

export default Catalogo;
