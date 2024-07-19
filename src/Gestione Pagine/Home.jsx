import React from 'react';
import AnimatedGif from '../ComponentsHome/AnimatedGif ';
import GameList from '../ComponentsHome/GameList';
import GameList2 from '../ComponentsHome/GameList2';
import BannerAnnuncio from '../ComponentsHome/BannerAnnuncio';
import BannerPresentazione from '../ComponentsHome/BannerPresentazione';
import Footer from '../ComponentsHome/FooterHomepage';
import GameGridList from  '../ComponentsHome/GameGridList'
function Home({ apiKey }) {
  return (
    <div className="background page-container">
      <AnimatedGif genre="action" year="2023" />
      <GameGridList apiKey={apiKey} genre="shooter" year="2022" />
      <GameList apiKey={apiKey} genre="action" year="2023" />
      <GameList2 apiKey={apiKey} genre="shooter" year="2023" />
      <BannerAnnuncio />
      <BannerPresentazione />
      <Footer />
    </div>
  );
}

export default Home;