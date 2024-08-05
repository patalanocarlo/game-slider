import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../StyleLogin&Registrazione/Login.css'; 
import backgroundImage from '../Images/view-illuminated-neon-gaming-keyboard-setup-controller.jpg'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Credenziali non valide');
      }

      const data = await response.text();
      localStorage.setItem('authToken', data); 
      setSuccess(true);
      setError('');
      navigate('/');  

    } catch (err) {
      setError(err.message);
    }
  };

  const handleHomeRedirect = () => {
    navigate('/'); 
  };

  return (
    <div className="login-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-form-container">
        <h2 className="text-center">Login</h2>
        {!success ? (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="login-button">
            Accedi
            </Button>
            {error && <p className="text-danger ">{error}</p>}
          </Form>
        ) : (
          <div className="text-center">
            <p>Login completato con successo!</p>
            <Link to="/" className="btn btn-primary">Vai alla Homepage</Link>
          </div>
        )}
        <div className="text-center mt-3">
          <Link to="/register">Non hai un account?Registrati Qui</Link>
          <Button 
            variant="secondary" 
            className="home-button mt-2"
            onClick={handleHomeRedirect}
          >
            Torna alla Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
