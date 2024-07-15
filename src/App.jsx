import React from 'react';
import './App.css';
import Navbar from './Components/MyNavbar';
import AnimatedGif  from './Components/AnimatedGif ';
import GameList from './Components/GameList';
import GameList2 from './Components/GameList2';
import Footer from'./Components/FooterHomepage'
import BannerAnnuncio from  './Components/BannerAnnuncio';
import BannerPresentazione from  './Components/BannerPresentazione'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const apiKey = 'f511273fe9734983b1d420685c9477f5' ;
  return (
    <div className="background page-container">
      
     <Navbar />
     <AnimatedGif genre="action" year="2023" />
     <GameList apiKey={apiKey} genre="action" year="2023" />s
     <GameList2 apiKey={apiKey} genre="shooter" year="2023" />
     <BannerAnnuncio/>
     <BannerPresentazione/>
     <Footer />
    </div>
  );
}

export default App;