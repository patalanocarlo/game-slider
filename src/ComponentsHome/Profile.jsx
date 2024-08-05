import React, { useState, useEffect, useRef } from 'react';
import { Button, Image, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import '../StyleHome/Profile.css';
import ImageProfile from '../Images/8088488.jpg'; // Importa l'immagine locale

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [purchases, setPurchases] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editableField, setEditableField] = useState(null); // Campo attualmente modificabile
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Stato del modale di cancellazione
  const [password, setPassword] = useState(''); // Stato per la password di conferma
  const chartRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await fetch('http://localhost:3001/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Fetch profile data failed:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchPurchases = async () => {
      const token = localStorage.getItem('authToken');
      try {
        const response = await fetch('http://localhost:3001/user/purchases', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPurchases(data);
      } catch (error) {
        console.error('Fetch purchases data failed:', error);
      }
    };

    fetchPurchases();
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = document.getElementById('purchaseChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: purchases.map(purchase => new Date(purchase.date).toLocaleDateString('it-IT')),
        datasets: [{
          label: 'Acquisti degli ultimi 10 giorni',
          data: purchases.map(purchase => purchase.amount),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        }],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Data'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Importo (€)'
            }
          }
        }
      }
    });
  }, [purchases]);

  const handleSave = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await fetch('http://localhost:3001/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setIsEditing(false);
      setEditableField(null);
    } catch (error) {
      console.error('Save profile data failed:', error);
    }
  };
  
  const handleDelete = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await fetch('http://localhost:3001/user/profile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      navigate('/login');
    } catch (error) {
      console.error('Delete account failed:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFieldClick = (field) => {
    if (isEditing) {
      setEditableField(field);
    }
  };

  const handleInputBlur = () => {
    setEditableField(null);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  return (
    <div className="profile-container margin">
      <div className="profile-header">
        <div className="profile-image-section">
          <Image
            src={ImageProfile} 
            alt="Profile"
            roundedCircle
            className="profile-image"
          />
          <div>Stato: Online</div>
        </div>
        <div className="profile-info">
          <div className="profile-info-item" onClick={() => handleFieldClick('username')}>
            <strong>Username:</strong>
            {editableField === 'username' && isEditing ? (
              <input
                type="text"
                name="username"
                value={userData.username || ''}
                onChange={handleChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
              />
            ) : (
              <span>{userData.username}</span>
            )}
          </div>
          <hr />
          <div className="profile-info-item" onClick={() => handleFieldClick('nome')}>
            <strong>Nome:</strong>
            {editableField === 'nome' && isEditing ? (
              <input
                type="text"
                name="nome"
                value={userData.nome || ''}
                onChange={handleChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
              />
            ) : (
              <span>{userData.nome}</span>
            )}
          </div>
          <hr />
          <div className="profile-info-item" onClick={() => handleFieldClick('cognome')}>
            <strong>Cognome:</strong>
            {editableField === 'cognome' && isEditing ? (
              <input
                type="text"
                name="cognome"
                value={userData.cognome || ''}
                onChange={handleChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
              />
            ) : (
              <span>{userData.cognome}</span>
            )}
          </div>
          <hr />
          <div className="profile-info-item" onClick={() => handleFieldClick('email')}>
            <strong>Email:</strong>
            {editableField === 'email' && isEditing ? (
              <input
                type="email"
                name="email"
                value={userData.email || ''}
                onChange={handleChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
              />
            ) : (
              <span>{userData.email}</span>
            )}
          </div>
          <hr />
          <div className="profile-info-item" onClick={() => handleFieldClick('password')}>
            <strong>Password:</strong>
            {editableField === 'password' && isEditing ? (
              <input
                type="password"
                name="password"
                value={userData.password || ''}
                onChange={handleChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
              />
            ) : (
              <span>{userData.password ? '*'.repeat(userData.password.length) : '***'}</span>
            )}
          </div>
        </div>
      </div>
      <div className="purchase-graph">
        <canvas id="purchaseChart"></canvas>
      </div>
      <div className="profile-buttons">
        {isEditing ? (
          <>
            <Button variant="primary" onClick={handleSave}>Salva</Button>
            <Button variant="danger" onClick={() => setShowDeleteModal(true)}>Elimina</Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={() => setIsEditing(true)}>Modifica</Button>
            <Button variant="danger" onClick={() => setShowDeleteModal(true)}>Cancella</Button>
          </>
        )}
        <Button variant="success" onClick={() => navigate('/')}>Ok</Button>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Conferma Cancellazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPassword">
              <Form.Label>Per favore, conferma la tua password per procedere:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Chiudi</Button>
          <Button variant="danger" onClick={handleDelete}>Conferma Eliminazione</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Profile;
