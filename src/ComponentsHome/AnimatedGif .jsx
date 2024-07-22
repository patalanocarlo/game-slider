import React, { useState } from 'react';
import '../StyleHome/AnimatedGif.css';
import caroselloImg from '../Images/Omori.png'; 
import caroselloImg2 from '../Images/call-of-duty-black-ops-6-hd-wallpaper-uhdpaper.com-814@0@j.jpg'; 
import caroselloImg3 from '../Images/cropped-1920-1080-1332401.jpeg'; 
import caroselloImg4 from '../Images/forza.jpeg'; 
import caroselloImg5 from '../Images/helld.jpeg'; 

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [caroselloImg, caroselloImg2, caroselloImg3, caroselloImg4, caroselloImg5];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel ">
            <button onClick={prevSlide} className="carousel-button prev">‹</button>
            <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                    />
                ))}
            </div>
            <button onClick={nextSlide} className="carousel-button next">›</button>
        </div>
    );
};

export default Carousel;