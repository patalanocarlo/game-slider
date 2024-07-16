import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleHome/CallOfDuty.css'; 
import Image from '../Images/the last cover 2.jpg';
import VideoImage1 from '../Images/the last main image.jpg';  
import VideoImage2 from '../Images/the last second image.jpg';
import VideoImage3 from '../Images/the last terza image.jpg';
import VideoImage4 from '../Images/the last quarta image.jpg';
import VideoImage5 from '../Images/the last sesta image.jpg';

import NewsImage4 from '../Images/t1.jpg';
import NewsImage5 from '../Images/t2.jpg';
import NewsImage6 from '../Images/t3.jpg';
import gifImage from '../Images/videos/the-last-of-us2-clicker.gif';

const ProductPage = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 text-center mt-5">
          <img src={Image} alt="Elden Ring Shadow of the Erdtree Edition" className="img-fluid rounded" />
          <div className="mt-4">
            <h2>Riguardo al prodotto</h2>
            <p>
            In seguito agli eventi del primo capitolo, Joel Miller confessa a suo fratello Tommy di aver impedito alle Luci di effettuare l'intervento che avrebbe trovato una cura per l'epidemia legata al fungo Cordyceps che sta martoriando il mondo, la quale avrebbe però portato alla morte di Ellie. Quattro anni dopo, Joel ed Ellie si sono stabiliti a Jackson, nel Wyoming, sebbene lentamente allontanandosi l'uno dall'altra. Mentre sono di pattuglia, Joel e Tommy salvano una donna sconosciuta di nome Abby Anderson da un'orda di infetti.
            </p>
            <div className="tags mt-3">
              <span className="badge bg-secondary zone2">STORIA BEN CURATA</span>
              <span className="badge bg-secondary zone2">PROTAGONISTA FEMMINILE</span>
              <span className="badge bg-secondary zone2">SPARATUTTO IN TERZA PERSONA</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <h2>The Last Of Us Part II</h2>
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
            <h2 className="text-danger"><del>69,99€</del> 59.99€ <span className="text-success">-10%</span></h2>
          </div>
          <button className="btn btn-warning w-100 mb-3">Aggiungi al carrello</button>
          <div className="product-details">
            <h2>Informazioni prodotto</h2>
            <ul className="list-unstyled">
              <li><strong>PEGI:</strong> PEGI 18</li>
              <li><strong>Sviluppatore:</strong> 	Naughty Dog LLCs</li>
              <li><strong>Publisher:</strong> 	Sony Interactive Entertainment</li>
              <li><strong>Data di rilascio:</strong>19 giugno 2020</li>
              <li><strong>Genere:</strong> 	Giocatore singolo, Azione, Avventura</li>
              <li><strong>Ultime recensioni Locali:</strong> Molto positiva (19029)</li>
              <li><strong>Tutte le recensioni Locali:</strong> Molto positiva (21270)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <h2>Video e immagini del prodotto</h2>
          <div className="ratio ratio-16x9 mb-4">
            <iframe 
              src=" https://www.youtube.com/embed/vhII1qlcZ4E" 
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
            <div className="col-lg-6 mb-4 movement ">
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
              <img src={gifImage} alt="GIF animata" className="rounded" />
            </div>
            <p>L'edizione PC di The Last of Us Parte I introduce numerose funzionalità per dare nuova vita all'indimenticabile viaggio di Joel ed Ellie. Questa versione di The Last of Us Parte I è ottimizzata per PC attraverso vari miglioramenti specificatamente pensati per la nuova piattaforma. Il gioco prevede il supporto ad AMD FSR 2.2, Nvidia DLSS Super Resolution*, VSync e alle impostazioni di frame rate, oltre a una serie di funzionalità implementate appositamente per PC, inclusa la qualità variabile delle texture, delle ombre, dei riflessi, dell'occlusione ambientale e altro ancora.
            </p>
            <p>Nel corso dell'avventura di Joel ed Ellie, i giocatori PC potranno immergersi in ambienti magnifici e al contempo spaventosi, con gli straordinari dettagli garantiti dalla risoluzione 4K**. Dalle strade ostili e oppressive della ZQ di Boston, fino alle case abbandonate della città di Bill, potranno intraprendere un viaggio ancora più evocativo attraverso gli Stati Uniti grazie al supporto dei monitor ultrawide, in formato 21:9 (Ultrawide) o 32:9 (Super Ultrawide).</p>
            <p>Viaggiate alla scoperta di un mondo nuovo, introducendovi negli edifici in rovina e inoltrandovi nelle città abbandonate. Recuperate provviste rovistando nei cassetti e negli armadietti. Affrontate le adrenaliniche scene d'azione con il supporto audio 3D, che vi avvolgerà con il fruscio delle foglie, il rumore dei vetri rotti o i passi dei nemici che tentano di tendervi un'imboscata***.</p>
            <p>Il gioco potenzia al massimo il frame rate attraverso l'innovativa tecnologia di temporal upscaling di AMD. FSR 2 usa algoritmi all'avanguardia per migliorare il frame rate e garantire un'esperienza di gioco ad alta risoluzione, con il supporto a numerose schede grafiche compatibili.</p>
            <p>The Last of Us Parte I per PC prevede il supporto al controller DualSense attraverso una connessione cablata, per permettere ai giocatori di percepire impatti e vibrazioni degli scontri e degli eventi di gioco attraverso il feedback aptico e gli effetti grilletto dinamici. Il supporto al controller DualShock 4 e a un'ampia gamma di gamepad, tastiere e mouse consente di adattare i controlli al proprio stile di gioco. La versione PC include nuove impostazioni di controllo e personalizzazione, tra cui la rimappatura completa dei comandi, associazioni primarie e secondarie per tastiera e mouse, una modalità adattiva che permette ai giocatori di combinare i comandi della tastiera e del controller, e molto altro ancora. La nuova edizione implementa inoltre le funzioni di accessibilità introdotte in The Last of Us Parte I, per garantire ai giocatori un'esperienza di gioco completamente personalizzabile.</p>
          </div>
        )}
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <h2>Ultime notizie sul gioco</h2>
          <div className="news-item d-flex align-items-start mb-4">
            <img src={NewsImage4} alt="News 1" className="img-fluid rounded me-3" style={{ width: '250px', height: 'auto' }} />
            <div>
              <p className="text-white mb-1">un mese fa</p>
              <h5 className="text-white">Secondo un insider, il porting per PC di The Last of Us Part 2 è pronto da almeno sette mesi</h5>
              <p className="text-white">
              L'insider che lavora per Dealabs, Billbil-kun, è generalmente estremamente affidabile e ben informato. E ha appena fatto una nuova rivelazione che potrebbe far piacere a molti fan delle creazioni di Naughty Dog. 
              </p>
            </div>
          </div>
          <div className="news-item d-flex align-items-start mb-4">
            <img src={NewsImage5} alt="News 2" className="img-fluid rounded me-3" style={{ width: '250px', height: 'auto' }} />
            <div>
              <p className="text-white mb-1">7 mesi fa</p>
              <h5 className="text-white">Naughty Dog cancella il gioco multiplayer di The Last of Us</h5>
              <p className="text-white">
              Sapevamo che lo sviluppo del gioco multiplayer standalone The Last of Us stava incontrando delle difficoltà. E questo è un eufemismo: Naughty Dog ha appena cancellato il gioco. Lo studio americano ha annunciato la sua decisione in un comunicato stampa.
              </p>
            </div>
          </div>
          <div className="news-item d-flex align-items-start">
            <img src={NewsImage6} alt="News 3" className="img-fluid rounded me-3" style={{ width: '250px', height: 'auto' }} />
            <div>
              <p className="text-white mb-1">8 mesi fa</p>
              <h5 className="text-white">
              Presto dovrebbe arrivare una versione PS5 di The Last of Us Part II</h5>
              <p className="text-white">
              Sony starebbe per annunciare un porting di The Last of Us Part II per PS5. Su X.com, il rinomato account PlayStation Game Size ha pubblicato un breve messaggio sull'argomento. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
