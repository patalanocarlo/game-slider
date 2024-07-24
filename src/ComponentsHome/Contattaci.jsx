import React, { useState } from 'react';
import '../StyleHome/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      const result = await response.text();
      console.log('Form submitted:', result);

      // Pulisci il modulo
      setFormData({
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Errore durente la consegna del modulo', error);
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-us-container">
        <h2>Contattaci</h2>
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
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
