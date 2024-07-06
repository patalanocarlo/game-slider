import React from 'react';
import gifAnimated from '../Images/videos/giphy (1).gif';
import '../Style/AnimatedGif.css';
const AnimatedGif = () => {
  return (
    <div className="gif-container">
      <img src={gifAnimated} alt="Animated GIF" className="animated-gif" />
    </div>
  );
}

export default AnimatedGif;