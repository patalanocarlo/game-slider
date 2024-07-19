import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext'; 
import '../StyleHome/GameList.css'; 

const GameGrid = ({ apiKey, genre, year }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, isItemAdded } = useContext(CartContext);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${apiKey}&page_size=7&genres=${genre}&dates=${year}-01-01,${year}-12-31`
        );
        if (!response.ok) {
          throw new Error('Errore nel caricamento dei dati');
        }
        const data = await response.json();
        const gamesWithPrices = data.results.map(game => ({
          ...game,
          price: (Math.random() * (69.99 - 30) + 30).toFixed(2)
        }));
        setGames(gamesWithPrices);
        setLoading(false);
      } catch (error) {
        console.error('Errore:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, [apiKey, genre, year]);

  const renderLoadingPlaceholder = () => (
    <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
      <div className="card-placeholder">
        <div className="placeholder-img"></div>
        <div className="placeholder-body">
          <div className="placeholder-title"></div>
          <div className="placeholder-text"></div>
          <div className="placeholder-text"></div>
        </div>
      </div>
    </Col>
  );

  const renderGameCard = (game) => {
    const isAdded = isItemAdded(game.id);

    return (
      <Col key={game.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
        <Card className="game-card h-100">
          <Card.Img variant="top" src={game.background_image} />
          <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>
              Pubblicato il: {new Date(game.released).toLocaleDateString('it-IT')}
            </Card.Text>
            <Card.Text>Rating: {game.rating}</Card.Text>
            <Card.Text>Prezzo: {game.price} €</Card.Text>
            <Button 
              variant={isAdded ? "danger" : "primary"} 
              className={isAdded ? "added-to-cart-btn" : "add-to-cart-btn"} 
              onClick={() => addToCart(game)}
              disabled={isAdded}
            >
              {isAdded ? "Aggiunto" : "Aggiungi al carrello"}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container className="my-4">
      {games.length > 0 && (
        <div className="mb-4">
          <Card className="bg-dark text-white game-card">
            <Card.Img
              src={games[0].background_image}
              alt={games[0].name}
              style={{ height: '450px', objectFit: 'cover' }}
            />
            <Card.ImgOverlay className="card-overlay">
              <Card.Title className="card-title">{games[0].name}</Card.Title>
              <Card.Text className="card-text">{games[0].price} €</Card.Text>
              <Button 
                variant={isItemAdded(games[0].id) ? "danger" : "primary"} 
                className={`top-card-btn ${isItemAdded(games[0].id) ? "added-to-cart-btn" : "add-to-cart-btn"}`} 
                onClick={() => addToCart(games[0])}
                disabled={isItemAdded(games[0].id)}
              >
                {isItemAdded(games[0].id) ? "Aggiunto" : "Aggiungi al carrello"}
              </Button>
            </Card.ImgOverlay>
          </Card>
        </div>
      )}
      <Row>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => renderLoadingPlaceholder(index))
        ) : (
          games.slice(1).map((game) => renderGameCard(game))
        )}
      </Row>
    </Container>
  );
};

export default GameGrid;
