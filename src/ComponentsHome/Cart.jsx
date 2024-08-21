import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap';
import { CartContext } from '../ComponentsHome/CartContext';
import '../StyleHome/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

// Load Stripe with the provided test key
const stripePromise = loadStripe('pk_test_51PgiuoRoqJCjOJgQOgcXBwJSUQuqkluMbchOS3bM2PAA9JsbycUco5Y9kOoHjYravhi37L25wKhACAp1JDT0vn1700owDLitg8');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false); 
  const navigate = useNavigate();

  const getTotalPrice = () => {
 
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const token = localStorage.getItem('authToken');
    if (!token) {
      
      setShowLoginModal(true);
      setLoading(false);
      return;
    }

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      let amount = getTotalPrice() * 100;

      if (amount < 50) {
        
        amount = 50;
      }

      const response = await fetch('http://localhost:3001/api/payment/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ amount: amount }),
      });

      if (!response.ok) {
        throw new Error(`Errore HTTP! Stato: ${response.status}`);
      }

      const { clientSecret } = await response.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      setLoading(false);

      if (error) {
        console.error('[error]', error);
        setError(error.message);
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        console.log('[PaymentIntent]', paymentIntent);
        clearCart();
        setShowModal(true); 
      }
    } catch (error) {
      console.error('Errore:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false); 
    navigate('/login'); 
  };

  const handleGoToHomepage = () => {
    navigate('/'); 
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="checkout-form">
        <CardElement />
        <Button type="submit" variant="success" disabled={!stripe || loading} className="mt-3">
          {loading ? 'Elaborazione...' : 'Paga'}
        </Button>
        {error && <div className="error-message mt-3">{error}</div>}
      </form>

      <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal">
        <Modal.Header closeButton className="modal-header-centered">
          <h3 className="modal-title">Congratulazioni!</h3>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Grazie per aver acquistato da noi.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="success" onClick={handleCloseModal}>
            Ok
          </Button>
          <Button variant="primary" onClick={handleGoToHomepage}>
            Torna alla Homepage
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleCloseLoginModal} centered>
        <Modal.Header closeButton>
          <h5>Attenzione</h5>
        </Modal.Header>
        <Modal.Body>
          <p>Devi essere loggato per completare l'acquisto.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseLoginModal}>
            Vai al Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

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
        <div className="cart-summary-container">
          <div className="cart-summary-content">
            <h2 className='margin'>Riepilogo</h2>
            <p>Totale: {getTotalPrice()} €</p>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Cart;
