import React, { useState, useEffect } from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import '../StyleHome/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [purchases, setPurchases] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
 
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:3001/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUserData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {

    const fetchPurchases = async () => {
      const token = localStorage.getItem('authToken');
      const response = await fetch('http://localhost:3001/user/purchases', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setPurchases(data);
    };

    fetchPurchases();
  }, []);

  useEffect(() => {
    // Create purchase graph
    const ctx = document.getElementById('purchaseChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: purchases.map(purchase => purchase.date),
        datasets: [{
          label: 'Acquisti degli ultimi 10 giorni',
          data: purchases.map(purchase => purchase.amount),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        }],
      },
    });
  }, [purchases]);

  const handleSave = () => {
    // Save user data
  };

  const handleDelete = () => {
    // Delete account
  };

  return (
    <div className="profile-container">
      <Form className="profile-form">
        <div className="profile-image-section">
          <Image src={userData.profileImage} alt="Profile" roundedCircle />
          <div>Stato: Online</div>
        </div>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={userData.username} disabled />
        </Form.Group>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" value={userData.nome} />
        </Form.Group>
        <Form.Group controlId="formCognome">
          <Form.Label>Cognome</Form.Label>
          <Form.Control type="text" value={userData.cognome} />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={userData.email} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={userData.password} />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>Salva</Button>
        <Button variant="danger" onClick={handleDelete}>Cancella</Button>
      </Form>
      <div className="purchase-graph">
        <canvas id="purchaseChart"></canvas>
      </div>
    </div>
  );
};

export default Profile;
