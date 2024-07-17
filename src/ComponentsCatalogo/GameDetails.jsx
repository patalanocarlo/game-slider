import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Container, Row, Col, Button, Image } from 'react-bootstrap';
import { CartContext } from '../ComponentsHome/CartContext';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, isItemAdded } = useContext(CartContext);

  useEffect(() => {
    const fetchGameDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=f511273fe9734983b1d420685c9477f5`);
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  const getRandomPrice = () => {
    return (Math.random() * (60 - 30) + 30).toFixed(2);
  };

  const getShortDescription = (description) => {
    const lines = description.split('\n');
    return lines.slice(0, 5).join('\n');
  };

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!game) {
    return <div className="text-center">Gioco non trovato</div>;
  }

  const price = getRandomPrice();

  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className='mt-5'>
          <Image src={game.background_image} alt={game.name} fluid />
          <p>{getShortDescription(game.description_raw)}</p>
        </Col>
        <Col  className='mt-5' md={6}>
          <h2>{game.name}</h2>
          <p>Prezzo: {price} €</p>
          <Button 
            variant="primary" 
            onClick={() => addToCart({ id: game.id, name: game.name, price, background_image: game.background_image, rating: game.rating, released: game.released })}
            disabled={isItemAdded(game.id)}
          >
            {isItemAdded(game.id) ? 'Aggiunto al carrello' : 'Aggiungi al carrello'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GameDetails;
