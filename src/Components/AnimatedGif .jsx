import React, { useRef, useState } from 'react';
import gifAnimated from '../Images/videos/giphy (1).gif';
import '../Style/AnimatedGif.css';

const AnimatedGif = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const gifRef = useRef(null);
  const canvasRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      stopGif();
    } else {
      startGif();
    }
    setIsPlaying(!isPlaying);
  };

  const stopGif = () => {
    const gif = gifRef.current;
    const canvas = canvasRef.current;
    if (gif && canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = gif.width;
      canvas.height = gif.height;
      ctx.drawImage(gif, 0, 0, gif.width, gif.height);
      gif.style.display = 'none';
      canvas.style.display = 'block';
    }
  };

  const startGif = () => {
    const gif = gifRef.current;
    const canvas = canvasRef.current;
    if (gif && canvas) {
      gif.style.display = 'block';
      canvas.style.display = 'none';
    }
  };

  return (
    <div className="gif-container">
      <img
        src={gifAnimated}
        alt="Animated GIF"
        className="animated-gif"
        ref={gifRef}
        style={{ display: isPlaying ? 'block' : 'none' }}
      />
      <canvas ref={canvasRef} style={{ display: isPlaying ? 'none' : 'block' }}></canvas>
      <button onClick={togglePlay} className="play-stop-btn">
        {isPlaying ? 'Stop' : 'Play'}
      </button>
    </div>
  );
};

export default AnimatedGif;