import React, { useState } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../StyleLogin&Registrazione/registrazione.css'; 
import backgroundImage from '../Images/8088488.jpg';
import seaOfThievesImage from '../Images/videos/sea-of-thieves-sot.gif'; 

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

      const responseData = await response.text(); 

      if (responseData === 'Email già in uso') {
        setError('Email già in uso');
      } else if (responseData === 'Username già in uso') {
        setError('Username già in uso');
      } else if (responseData === 'Registrazione completata') {
        setSuccess(true);
        setError('');
      } else {
        throw new Error('Errore nella registrazione');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="register-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="register-form-container">
        <h2 className="text-center mb-4">Registrazione</h2>
        {!success ? (
          <Form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
            <Form.Group controlId="formBasicNome" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Inserisci un Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="register-input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCognome" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Inserisci un Cognome"
                value={cognome}
                onChange={(e) => setCognome(e.target.value)}
                className="register-input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicUsername" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Inserisci uno Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="register-input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Digita un email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="register-input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="register-input"
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Conferma Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="register-input"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="register-button">
             Registrati
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
      </div>
    </div>
  );
};

export default Register;
