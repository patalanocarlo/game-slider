import React from 'react';
import './App.css';
import Navbar from './Components/MyNavbar';
import AnimatedGif  from './Components/AnimatedGif ';
function App() {
  return (
    <div className="background">
     <Navbar />
     <AnimatedGif />
    </div>
  );
}

export default App;