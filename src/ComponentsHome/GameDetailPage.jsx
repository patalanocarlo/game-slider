import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, Spinner } from 'react-bootstrap';
import { CartContext } from '../ComponentsHome/CartContext';
import '../StyleHome/GameDetailPage.css'; // Nuovo file CSS per styling specifico del dettaglio gioco

const GameDetailPage = ({ apiKey }) => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, isItemAdded } = useContext(CartContext);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Errore nel caricamento dei dettagli del gioco');
        }
        const data = await response.json();
        const gameWithPrice = {
          ...data,
          price: (Math.random() * (69.99 - 30) + 30).toFixed(2),
        };
        setGame(gameWithPrice);
        setLoading(false);
      } catch (error) {
        console.error('Errore:', error);
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [apiKey, id]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!game) {
    return <div>Errore nel caricamento dei dettagli del gioco.</div>;
  }

  const isAdded = isItemAdded(game.id);

  return (
    <Container className="game-detail-page-container margin">
      <Row>
        <Col md={6}>
          <Image src={game.background_image} fluid className="game-detail-image" />
          <h3 className="game-detail-price">Prezzo: {game.price} €</h3>
          <Button
            variant={isAdded ? 'danger' : 'primary'}
            onClick={() => addToCart(game)}
            disabled={isAdded}
            className={`game-detail-btn ${isAdded ? 'game-detail-added-to-cart-btn' : 'game-detail-add-to-cart-btn'}`}
          >
            {isAdded ? 'Aggiunto' : 'Aggiungi al carrello'}
          </Button>
          <Link to="/Catalogo" className="btn btn-secondary game-detail-btn">
            Torna al Catalogo
          </Link>
        </Col>
        <Col md={6} className="mt-5">
          <h1 className="game-detail-title">{game.name}</h1>
          <p className="game-detail-text">Pubblicato il: {new Date(game.released).toLocaleDateString('it-IT')}</p>
          <p className="game-detail-text">Rating: {game.rating}</p>
          <p className="game-detail-text">{game.description_raw}</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h3 className="game-detail-info-title">Informazioni aggiuntive</h3>
          <ul className="game-detail-info-list">
            <li>Sviluppatore: {game.developers.map((dev) => dev.name).join(', ')}</li>
            <li>Publisher: {game.publishers.map((pub) => pub.name).join(', ')}</li>
            <li>Piattaforme: {game.platforms.map((plat) => plat.platform.name).join(', ')}</li>
            <li>Genere: {game.genres.map((genre) => genre.name).join(', ')}</li>
            <li>Tags: {game.tags.map((tag) => tag.name).join(', ')}</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default GameDetailPage;
