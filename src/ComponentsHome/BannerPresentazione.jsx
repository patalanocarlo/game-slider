import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleHome/BannerPresentazione.css';
import Image from '../Images/Mini Images.jpg';
import Image2 from '../Images/nierautomata-game-of-the-yorha-edition-game-of-the-yorha-edition-pc-gioco-steam-cover.jpg';
import Image3 from '../Images/nierAutomata update.png';
import Image4 from '../Images/the-last-of-us-2-edizioni-da-collezione-gamesoul.jpg';
import Image5 from '../Images/the-last-of-us-part-2-ii-29525.webp';
import Image6 from '../Images/Halo game bunner.webp';

const BannerPresentazione = () => {
  return (
    <div className="container my-4 ">
      <div className="row">
        <h1>Ti presentiamo:</h1>
        <div className="col-md-8">
          <div className="card bg-dark text-white fixed-size">
            <Link to="/game/blackcell">
              <img src={Image} className="card-img" alt="BlackCell" />
              <div className="card-img-overlay"></div>
            </Link>
          </div>
          <div className="row mt-4 flex-column">
            <div className="col-12 mb-4">
              <div className="card bg-dark text-white fixed-size-small">
                <Link to="/game/nier-automata">
                  <img src={Image2} className="card-img" alt="Gioca e Trasformati" />
                  <div className="card-img-overlay"></div>
                </Link>
              </div>
            </div>
            <div className="col-12">
              <div className="card bg-dark text-white fixed-size-small">
                <Link to="/game/last-of-us-2">
                  <img src={Image4} className="card-img" alt="Ferma la Minaccia" />
                  <div className="card-img-overlay"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 sm-6">
          <div className="news-section">
            <h2>Novità Dei Titoli:</h2>
            <div className="news-item large-item">
              <Link to="/game/blackcell">
              <img src={Image} alt="Patch Notes" />
              </Link>
              <p>Stagione 4 di Call of Duty: Modern Warfare III - Note sulla patch.</p>
              <small>13 giorni fa</small>
            </div>
            <div className="news-item large-item">
              <Link to="/game/nier-automata">
             <img src={Image3} alt="Patch Notes" />
              </Link>
              <p>VideoGame e Anime il CrossOver che funziona!</p>
              <small>2 giorni fa</small>
            </div>
            <div className="news-item large-item">
             <Link to="/game/last-of-us-3">
             <img src={Image5} alt="Patch Notes" />
             </Link>
              <p>Un Mondo ormai in Epidemia, ma con ancora una speranza.</p>
              <small>12 Ore fa</small>
            </div>
            <div className="news-item large-item">
            <Link to="/game/HaloPrew">
            <img src={Image6} alt="Patch Notes" />
            </Link>
              <p>L'ultimo Capitolo Di una Leggenda.</p>
              <small>1 mese fa</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPresentazione;
