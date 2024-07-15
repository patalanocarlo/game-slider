import React, { useEffect, useState, useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleCatalogo/GalleryGame.css'; 

const HorizontalScrollGallery = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, ] = useState(1);
  const galleryRef = useRef(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=f511273fe9734983b1d420685c9477f5&page=${page}&page_size=20`);
        const data = await response.json();
        setGames((prevGames) => [...prevGames, ...data.results]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, [page]);

  const handleScroll = (direction) => {
    if (galleryRef.current) {
      const { scrollLeft, clientWidth } = galleryRef.current;
      const scrollAmount = clientWidth; 
      const newScrollPosition = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      galleryRef.current.scrollTo({ left: newScrollPosition, behavior: 'smooth' });
    }
  };

  const renderLoadingPlaceholder = () => {
    const placeholders = Array.from({ length: 1 }); 
    return placeholders.map((_, index) => (
      <div key={index} className="gallery-item">
        <div className="card-placeholder">
          <div className="placeholder-img"></div>
          <div className="placeholder-body">
            <div className="placeholder-title"></div>
            <div className="placeholder-text"></div>
            <div className="placeholder-text"></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="gallery-container">
      <h2 className='text-center mb-4'>Scegli tra un immenso Catalogo di Giochi</h2>
      <div className="gallery-wrapper">
        <button className="scroll-button left" onClick={() => handleScroll('left')}>&lt;</button>
        <div className="gallery" ref={galleryRef}>
          {loading ? (
            renderLoadingPlaceholder()
          ) : (
            games.map((game) => (
              <div className="gallery-item" key={game.id}>
                <img src={game.background_image} alt={game.name} className="img-fluid" />
              </div>
            ))
          )}
        </div>
        <button className="scroll-button right" onClick={() => handleScroll('right')}>&gt;</button>
      </div>
      {loading && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
};

export default HorizontalScrollGallery;
