import React from 'react';
import './App.css';
import Navbar from './Components/MyNavbar';
import AnimatedGif  from './Components/AnimatedGif ';
import GameList from './Components/GameList';
function App() {
  const apiKey = 'f511273fe9734983b1d420685c9477f5' ;
  return (
    <div className="background page-container">
      
     <Navbar />
     <AnimatedGif />
     <GameList apiKey={apiKey} genre="action" year="2023" />
    </div>
  );
}

export default App;