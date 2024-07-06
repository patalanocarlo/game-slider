import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/GameList.css';

const GameList = ({ apiKey, genre, year }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${apiKey}&page_size=8&genres=${genre}&dates=${year}-01-01,${year}-12-31`);
        if (!response.ok) {
          throw new Error('Errore nel caricamento dei dati');
        }
        const data = await response.json();
        setGames(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Errore:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, [apiKey, genre, year]);

  const renderLoadingPlaceholder = () => {
    return (
      <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
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
  };

  const renderGameCard = (game) => {
    return (
      <Col key={game.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
        <Card className="game-card">
          <Card.Img variant="top" src={game.background_image} />
          <Card.Body>
            <Card.Title>{game.name}</Card.Title>
            <Card.Text>
              Pubblicato il: {new Date(game.released).toLocaleDateString('it-IT')}
            </Card.Text>
            <Card.Text>Rating: {game.rating}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-center mb-4">Titoli Del momento</h1>
        </Col>
      </Row>
      <Row>
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => renderLoadingPlaceholder(index))
        ) : (
          games.map((game) => renderGameCard(game))
        )}
      </Row>
    </Container>
  );
};

export default GameList;
