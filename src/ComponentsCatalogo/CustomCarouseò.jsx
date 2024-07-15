import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleCatalogo/CustomCarousel.css';

const CustomCards = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=f511273fe9734983b1d420685c9477f5&page_size=8&genres=action');
        const data = await response.json();

        const gamesWithPrice = data.results.slice(0, 3).map((game) => ({
          ...game,
          price: (Math.random() * 50).toFixed(2), 
          discount: Math.floor(Math.random() * 50) + 10 
        }));
        setGames(gamesWithPrice);
        setLoading(false);
      } catch (error) {
        console.error('Errore fetching dati:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const renderLoadingPlaceholder = () => {
    const placeholders = Array.from({ length: 3 }); 
    return placeholders.map((_, index) => (
      <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
        <div className="card-placeholder">
          <div className="placeholder-img"></div>
          <div className="placeholder-body">
            <div className="placeholder-title"></div>
            <div className="placeholder-text"></div>
            <div className="placeholder-text"></div>
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <h2 className='text-center mt-5'>Offerte Vantaggiose Su Grandi Titoli</h2>
        {loading ? (
          renderLoadingPlaceholder()
        ) : (
          games.map((game, index) => (
            <Col xs={12} sm={4} md={4} className="mb-4" key={index}>
              <Card className='card2'>
                <Card.Img variant="top" src={game.background_image} alt={game.name} />
                <Card.Body className='card-body2'>
                  <Card.Title>
                    {game.name}
                    <Badge pill bg="success" className="float-end">
                      -{game.discount}%
                    </Badge>
                  </Card.Title>
                  <Card.Text>
                    <p>Valutazione: {game.rating}</p>
                    <p>Prezzo: ${(game.price * (1 - game.discount / 100)).toFixed(2)} (Scontato da ${game.price})</p>
                    <button>Aggiungi Al Carrello</button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default CustomCards;
