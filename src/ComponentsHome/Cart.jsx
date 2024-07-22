import React, { useContext } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { CartContext } from '../ComponentsHome/CartContext';
import '../StyleHome/Cart.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };
  return (
    <Container className="my-4">
      <Row>
        <Col md={8}>
          <h2 className='margin'>Carrello</h2>
          {cart.map((item, index) => (
            <div key={index} className="cart-item mb-4">
              <Row>
                <Col xs={5} sm={4} md={3}> 
                  <Image className="cart-item-image" src={item.background_image} fluid rounded /> 
                </Col>
                <Col xs={7} sm={8} md={9}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>{item.name}</h4>
                    <Button 
                      variant="danger" 
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </div>
                  <p>Prezzo: {item.price} €</p>
                  <p>Rating: {item.rating}</p>
                  <p>Data di uscita: {new Date(item.released).toLocaleDateString('it-IT')}</p>
                </Col>
              </Row>
            </div>
          ))}
        </Col>
        <Col md={4}>
          <h2 className='margin'>Riepilogo</h2>
          <p>Totale: {getTotalPrice()} €</p>
          <Button variant="success">Acquista</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
