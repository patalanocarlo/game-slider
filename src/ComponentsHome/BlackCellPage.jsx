
import React, {useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleHome/Nier.css'; 
import Image from '../Images/call-of-duty-modernSHOP.jpg';
import VideoImage1 from '../Images/call Movement.jpg';  
import VideoImage2 from'../Images/call zombie.jpg';
import VideoImage3 from '../Images/call-of-duty-modern-warfare-iii-ps5-playstation-5-gioco-playstation-store-wallpaper-3-thumbv2.jpg';
import VideoImage4 from '../Images/call snow.jpg';
import VideoImage5 from '../Images/call paracadute.jpg';
import NewsImage1 from '../Images/cod ghost.jpg';
import NewsImage2 from '../Images/call Movement.jpg';
import NewsImage3 from '../Images/fallout cod.jpg';
import { CartContext } from '../ComponentsHome/CartContext';




const ProductPage = () => {
  const { addToCart, isItemAdded } = useContext(CartContext); 
  const handleAddToCart = () => {
  
    const game = {
      id: 4, 
      name: 'Call of Duty: Modern Warfare III',
      price: '59.99',
      background_image: Image,
      released: '10 novembre 2023',
      rating: '9.0', 
    };
    addToCart(game);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 text-center mt-5">
          <img src={Image} alt="Elden Ring Shadow of the Erdtree Edition" className="img-fluid" />
          <div className="mt-4">
            <h2>Riguardo al prodotto</h2>
            <p>
              ADATTATI O MUORI NELLA LOTTA ALLA MINACCIA DEFINITIVA Nel seguito diretto di Call of Duty®: Modern Warfare® II, il capitano Price e la Task Force 141 affrontano la minaccia definitiva. Vladimir Makarov, criminale di guerra ultranazionalista, sta estendendo il suo potere nel mondo, costringendo la Task Force 141 a lottare come mai prima d'ora. 
            </p>
          
            <div className="tags mt-3">
              <span className="badge bg-secondary zone2">AZIONE</span>
              <span className="badge bg-secondary zone2 ">SPARATUTTO IN PRIMA PERSONA</span>
              <span className="badge bg-secondary zone2">SPARATUTTO</span>
              <span className="badge bg-secondary zone2">MILITARE</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <h2>Call of Duty: Modern Warfare III</h2>
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
              <option value="PS5">PS5</option>
            </select>
          </div>
          <div className="mb-3">
            <h2 className="text-danger"><del>80€</del> 59.99€ <span className="text-success">-25%</span></h2>
          </div>
          <button 
            className={`btn ${isItemAdded(4) ? 'btn-danger' : 'btn-warning'} w-100 mb-3`} 
            onClick={handleAddToCart} 
            disabled={isItemAdded(4)} 
          >
            {isItemAdded(4) ? 'Aggiunto al carrello' : 'Aggiungi al carrello'}
          </button>
          <div className="product-details">
            <h2>Informazioni prodotto</h2>
            <ul className="list-unstyled">
              <li><strong>PEGI:</strong> PEGI 18</li>
              <li><strong>Sviluppatore:</strong> Treyarch, Infinity Ward, Raven Software, Beenox, Sledgehammer Games, High Moon Studios, Demonware</li>
              <li><strong>Publisher:</strong> Activision</li>
              <li><strong>Data di rilascio:</strong> 10 novembre 2023</li>
              <li><strong>Genere:</strong> Giocatore singolo, Azione</li>
              <li><strong>Ultime recensioni Locali:</strong> Molto positiva (58061)</li>
              <li><strong>Tutte le recensioni Locali:</strong> Molto positiva (670204)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <h2>Video e immagini del prodotto</h2>
          <div className="ratio ratio-16x9 mb-4">
            <iframe 
              src="https://www.youtube.com/embed/PKb-zfbpIHM" 
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
              <img src={VideoImage1} alt="Game screenshot 1" className="img-fluid" />
            </div>
            <div className="col-lg-6 mb-4">
              <div className="d-flex flex-wrap">
                <div className="col-5 mb-4 zone">
                  <img src={VideoImage2} alt="Game screenshot 2" className="img-fluid" />
                </div>
                <div className="col-5 mb-4 zone">
                  <img src={VideoImage3} alt="Game screenshot 3" className="img-fluid" />
                </div>
                <div className="col-5 mb-4 zone">
                  <img src={VideoImage4} alt="Game screenshot 4" className="img-fluid" />
                </div>
                <div className="col-5 mb-4 zone">
                  <img src={VideoImage5} alt="Game screenshot 5" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
    <div className="col-12">
        <h2>Ultime notizie sul gioco</h2>
        <div className="news-item d-flex align-items-start mb-4">
            <img src={NewsImage1} alt="News 1" className="img-fluid me-3" style={{ width: '250px', height: 'auto' }} />
            <div>
                <p className="text-white mb-1">3 giorni fa</p>
                <h5 className="text-white">Call of Duty: il 24 luglio inizia un crossover con la WWE</h5>
                <p className="text-white">
                    Activision ha collaborato con la lega americana di wrestling per offrire contenuti in Call of Duty: Modern Warfare III e Call of Duty: Warzone. A partire dal 24 luglio la WWE sarà ospite della Stagione 5 di Call of Duty.
                </p>
            </div>
        </div>
        <div className="news-item d-flex align-items-start mb-4">
            <img src={NewsImage2} alt="News 2" className="img-fluid me-3" style={{ width: '250px', height: 'auto' }} />
            <div>
                <p className="text-white mb-1">21 giorni fa</p>
                <h5 className="text-white">Call of Duty: Modern Warfare III e Warzone ospiteranno i ricarichi della Stagione 4 a partire dal 26 giugno</h5>
                <p className="text-white">
                    Come sempre, Activision sta preparando un'importante ondata di novità per Call of Duty. La Stagione 4 Reloaded arriverà il 26 giugno alle 18:00 ora di Parigi. I giocatori avranno accesso a una nuova mappa standard 6v6.
                </p>
            </div>
        </div>
        <div className="news-item d-flex align-items-start">
            <img src={NewsImage3} alt="News 3" className="img-fluid me-3" style={{ width: '250px', height: 'auto' }} />
            <div>
                <p className="text-white mb-1">2 mesi fa</p>
                <h5 className="text-white">Sono trapelate le skin di Fallout in arrivo in Call of Duty</h5>
                <p className="text-white">
                    I giocatori di Call of Duty potranno presto mettere le mani su un nuovissimo pacchetto con i colori di Fallout. Ispirato alla serie TV, il bundle include skin per operatori e armi.
                </p>
            </div>
        </div>
    </div>
</div>

    </div>
  );
};

export default ProductPage;
