import React from 'react';
import '../Style/BannerPresentazione.css';
import Image from '../Images/Mini Images.jpg'

const CallOfDutyLayout = () => {
  return (
    <div className="container-fluid my-4 ">
      <div className="row">
        <div className="col-md-8">
          <div className="card bg-dark text-white fixed-size">
            <img src={Image} className="card-img" alt="BlackCell" />
            <div className="card-img-overlay"></div>
          </div>
          <div className="row mt-4 flex-column">
            <div className="col-12 mb-4">
              <div className="card bg-dark text-white fixed-size-small">
                <img src="{BlackCellImage} "className="card-img" alt="Gioca e Trasformati" />
                <div className="card-img-overlay"></div>
              </div>
            </div>
            <div className="col-12">
              <div className="card bg-dark text-white fixed-size-small">
                <img src="{BlackCellImage} " className="card-img" alt="Ferma la Minaccia" />
                <div className="card-img-overlay"></div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="col-md-4">
          <div className="news-section">
            <h2>NOVITÀ</h2>
            <div className="news-item large-item">
              <img src={Image} alt="Patch Notes" />
              <p>Stagione 4 di Call of Duty: Modern Warfare III - Note sulla patch</p>
              <small>13 giorni fa</small>
            </div>
            <div className="news-item large-item">
              <img src={Image}alt="Patch Notes" />
              <p>Note sulla patch della Stagione 4 di Warzone</p>
              <small>13 giorni fa</small>
            </div>
            <div className="news-item large-item">
              <img src={Image}alt="Patch Notes" />
              <p>Nuovi contenuti per MWIII: Stagione 4 Furiosa</p>
              <small>15 giorni fa</small>
            </div>
            <div className="news-item large-item">
              <img src={Image} alt="Patch Notes" />
              <p>Multiplayer Map Guide — Incline</p>
              <small>15 giorni fa</small>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallOfDutyLayout;
