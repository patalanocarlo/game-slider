import React from 'react';
import AnimatedGif from '../Components/AnimatedGif ';
import GameList from '../Components/GameList';
import GameList2 from '../Components/GameList2';
import BannerAnnuncio from '../Components/BannerAnnuncio';
import BannerPresentazione from '../Components/BannerPresentazione';
import Footer from '../Components/FooterHomepage';

function Home({ apiKey }) {
  return (
    <div className="background page-container">
      <AnimatedGif genre="action" year="2023" />
      <GameList apiKey={apiKey} genre="action" year="2023" />
      <GameList2 apiKey={apiKey} genre="shooter" year="2023" />
      <BannerAnnuncio />
      <BannerPresentazione />
      <Footer />
    </div>
  );
}

export default Home;