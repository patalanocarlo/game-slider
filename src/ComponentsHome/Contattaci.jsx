import React, { useState, useEffect } from 'react';
import '../StyleHome/ContactUs.css';
import {Link, useNavigate } from 'react-router-dom'; 
import backgroundImage from '../Images/10161184.jpg'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setIsLoggedIn(false);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkLogin()) return; 

    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch('http://localhost:3001/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        const result = await response.text();
        setFeedbackMessage('La mail è stata spedita, grazie di averci contattato!');
        console.log('Form submitted:', result);

        setFormData({
          subject: '',
          message: ''
        });
      } else {
        const error = await response.text();
        setFeedbackMessage(`Errore: ${error}`);
      }
    } catch (error) {
      console.error('Errore durante la consegna del modulo', error);
      setFeedbackMessage('Errore durante la consegna del modulo.');
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login'); 
  };

  if (!isLoggedIn) {
    return (
      <div className="contact-us" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="contact-us-container">
          <h3>Ci Dispiace!</h3>
          <p>Per inviare un'email, devi essere loggato.</p>
          <button onClick={handleLoginRedirect} className="btn btn-secondary">Vai al login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-us" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="contact-us-container">
        <h3>Contattaci</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">Oggetto:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Messaggio:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Invia</button>
  
          <Link to="/" className="btn btn-success btn2">
      Torna alla Home
    </Link>
       
        </form>
        {feedbackMessage && <p className="feedback-message">{feedbackMessage}</p>}
      </div>
    </div>
  );
};

export default ContactUs;
