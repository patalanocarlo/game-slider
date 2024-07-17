import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleHome/CallOfDuty.css'; 
import Image from '../Images/Halo game bunner.webp';
import VideoImage1 from '../Images/halo image big.jpg';  
import VideoImage2 from '../Images/Halo 1.jpeg';
import VideoImage3 from '../Images/HALO2.jpeg';
import VideoImage4 from '../Images/HALO 3.jpg';
import VideoImage5 from '../Images/Halo4.jpeg';
import NewsImage4 from '../Images/news halo 2.jpg';
import NewsImage5 from '../Images/comenews halo 1.jpg';
import gifImage from '../Images/videos/halo-infinite-on-outer-space-g0vegepl8g4902hi.gif';
import { CartContext } from '../ComponentsHome/CartContext'; 

const ProductPage = () => {
  const { addToCart, isItemAdded } = useContext(CartContext); 
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const handleAddToCart = () => {
    const game = {
      id: 1, 
      name: 'Halo Infinite',
      price: '29.99',
      background_image: Image,
      released: '2021-11-15',
      rating: '8.5',
    };
    addToCart(game);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 text-center mt-5">
          <img src={Image} alt="Halo Infinite" className="img-fluid" />
          <div className="mt-4">
            <h2>Riguardo al prodotto</h2>
            <p>
              Halo Infinite per PC e Xbox ONE doveva originariamente essere pubblicato come Halo 6, essendo la sesta versione principale della serie. Il gioco sparatutto in prima persona di fantascienza militare ha un vasto seguito e presenta l'umanità che combatte per la sopravvivenza contro alieni e fanatici religiosi.
            </p>
            <div className="tags mt-3">
              <span className="badge bg-secondary zone2">SPARATUTTO IN PRIMA PERSONA</span>
              <span className="badge bg-secondary zone2">SPARATUTTO</span>
              <span className="badge bg-secondary zone2">AZIONE</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <h2>Halo Infinite - Campagna (PC / Xbox ONE / Xbox Series X|S)</h2>
          <div className="d-flex justify-content-between align-items-center my-3">
            <span className="badge bg-success">Disponibile</span>
            <span className="badge bg-success">Download Immediato</span>
            <span className="badge bg-success">Download digitale</span>
          </div>
          <div className="mb-3">
            <label htmlFor="platformSelect" className="form-label">Piattaforma:</label>
            <select className="form-select" id="platformSelect">
              <option value="PC">PC</option>
              <option value="Xbox">Xbox</option>
            </select>
          </div>
          <div className="mb-3">
            <h2 className="text-danger"><del>60€</del> 29.99€ <span className="text-success">-50%</span></h2>
          </div>
          <button 
            className={`btn ${isItemAdded(1) ? 'btn-danger' : 'btn-warning'} w-100 mb-3`} 
            onClick={handleAddToCart} 
            disabled={isItemAdded(1)} 
          >
            {isItemAdded(1) ? 'Aggiunto al carrello' : 'Aggiungi al carrello'}
          </button>
          <div className="product-details">
            <h2>Informazioni prodotto</h2>
            <ul className="list-unstyled">
              <li><strong>PEGI:</strong> PEGI 18</li>
              <li><strong>Sviluppatore:</strong> 343 Industries</li>
              <li><strong>Publisher:</strong> Xbox Game Studios</li>
              <li><strong>Data di rilascio:</strong> 15 novembre 2021</li>
              <li><strong>Genere:</strong> PvP in linea, Azione</li>
              <li><strong>Ultime recensioni Locali:</strong> Contrastante (994)</li>
              <li><strong>Tutte le recensioni Locali:</strong> Maggiormente positiva (172062)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h2>Video e immagini del prodotto</h2>
          <div className="ratio ratio-16x9 mb-4">
            <iframe 
              src="https://www.youtube.com/embed/PyMlV5_HRWk" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="col-lg-6 mb-4">
              <img src={VideoImage1} alt="Game screenshot 1" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 mb-4">
              <div className="d-flex flex-wrap">
                <div className="col-5 mb-4 zone">
                  <img src={VideoImage2} alt="Game screenshot 2" className="img-fluid rounded" />
                </div>
                <div className="col-5 mb-4 zone">
                  <img src={VideoImage3} alt="Game screenshot 3" className="img-fluid rounded" />
                </div>
                <div className="col-5 mb-4 zone">
                  <img src={VideoImage4} alt="Game screenshot 4" className="img-fluid rounded" />
                </div>
                <div className="col-5 mb-4 zone">
                  <img src={VideoImage5} alt="Game screenshot 5" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Descrizione</h2>
        <button className="btn btn-primary mb-3" onClick={toggleDescriptionVisibility}>
          {isDescriptionVisible ? '-' : '+'}
        </button>
        {isDescriptionVisible && (
          <div className="position">
            <div className="Border gif-container mb-3">
              <img src={gifImage} alt="GIF animata" />
            </div>
            <p>
              Halo Infinite per PC e Xbox ONE doveva originariamente essere pubblicato come Halo 6, essendo la sesta versione principale della serie. Il gioco sparatutto in prima persona di fantascienza militare ha un vasto seguito e presenta l'umanità che combatte per la sopravvivenza contro alieni e fanatici religiosi.
            </p>
            <p>Ritorna Master Chief! A seguito degli eventi di Halo 5, questo gioco riprende la storia di Master Chief e lo riporta indietro nel tempo con un nuovo set di armature.</p>
            <p>Halo 4 ha avviato una trilogia, conosciuta come la trilogia di Reclaimer, e questo è l'episodio finale di quella trilogia.</p>
            <p>Che cos'è un Halo?</p>
            <p>All'interno del gioco, la Halo Array è un'immensa serie di super-armi a forma di anello.</p>
            <p>Una breve puntualizzazione: le microtransazioni fanno parte di questo gioco, ma gli sviluppatori non se la sono sentita di entrare nella polemica sui pagamenti.</p>
            <p>Modalità di gioco</p>
            <p>Giocatore singolo: gioca lungo l'arco della storia, eliminando i nemici.</p>
            <p>Multigiocatore: gioca con gli amici o contro estranei con un massimo di altri tre giocatori.</p>
          </div>
        )}
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h2>Ultime notizie sul gioco</h2>
          <div className="news-item d-flex align-items-start mb-4">
            <img src={NewsImage4} alt="News 1" className="img-fluid me-3 rounded" style={{ width: '250px', height: 'auto' }} />
            <div>
              <p className="text-white mb-1">7 mesi fa</p>
              <h5 className="text-white">Come Rockstar con GTA VI, 343 Industries mostra un trailer per Halo Infinite</h5>
              <p className="text-white">
                La strategia di comunicazione di Rockstar Games è già stata emulata.
              </p>
            </div>
          </div>
          <div className="news-item d-flex align-items-start mb-4">
            <img src={NewsImage5} alt="News 2" className="img-fluid me-3 rounded" style={{ width: '250px', height: 'auto' }} />
            <div>
              <p className="text-white mb-1">un anno fa</p>
              <h5 className="text-white">Halo Infinite riceverà l'aggiornamento di Xbox Series il 15 marzo</h5>
              <p className="text-white">
                Questo mercoledì, 15 marzo, l'ultimo gioco di Halo riceverà una piccola patch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
