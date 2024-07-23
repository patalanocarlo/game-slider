import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
          username: email,
          email,
          password,
          ruoloId: 1, // Usa l'ID del ruolo appropriato
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
        <Col md={6} lg={4}>
          <h2 className="text-center">Register</h2>
          {!success ? (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci un Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCognome">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci un Cognome"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci uno Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digita un email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formConfirmPassword">
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
              <p>Registrazione completata con successo!</p>
              <Link to="/login" className="btn btn-primary">Vai al Login</Link>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
