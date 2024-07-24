import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import seaOfThievesImage from '../Images/videos/sea-of-thieves-sot.gif'; // Use the correct path to the image

const Register = () => {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Le password non corrispondono');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          cognome,
          username,
          email,
          password,
          ruoloId: 1, 
        }),
      });

      if (!response.ok) {
        throw new Error('Errore nella registrazione');
      }

      setSuccess(true);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="justify-content-center w-100">
        <Col md={6} lg={5}>
          <h2 className="text-center mb-4">Registrazione</h2>
          {!success ? (
            <Form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
              <Form.Group controlId="formBasicNome" className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci un Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCognome" className="mb-3">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci un Cognome"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci uno Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digita un email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Conferma Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mt-3">
                Register
              </Button>
              {error && <p className="text-danger mt-3">{error}</p>}
            </Form>
          ) : (
            <div className="text-center">
              <p className="h4">Registrazione completata con successo!</p>
              <h4 className="mb-4">Benvenuto nella nostra famiglia!</h4>
              <Image src={seaOfThievesImage} alt="Benvenuto" fluid className="mb-4"/>
              <Link to="/login" className="btn btn-primary mt-3">Vai al Login</Link>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
