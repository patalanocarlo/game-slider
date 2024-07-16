import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleHome/CallOfDuty.css'; 
import Image from '../Images/Nier Image.jpg';
import VideoImage1 from '../Images/nier image grande.jpg';  
import VideoImage2 from '../Images/Nier combattimento.jpg';
import VideoImage3 from '../Images/Nier image bossfight.jpg';
import VideoImage4 from '../Images/Nier saluto.jpg';
import VideoImage5 from '../Images/Nier attacco aereo.jpg';

import NewsImage4 from '../Images/nier prima image.jpg';
import NewsImage5 from '../Images/Nier seconda image.jpg';
import NewsImage6 from '../Images/Nier terza image.jpg';
import gifImage from '../Images/videos/punch_by_nocturnbros_dbgr5fq.gif';

const ProductPage = () => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 text-center mt-5">
          <img src={Image} alt="Elden Ring Shadow of the Erdtree Edition" className="img-fluid" />
          <div className="mt-4">
            <h2>Riguardo al prodotto</h2>
            <p>
            NieR: Automata narra la storia degli androidi 2B, 9S e A2 e della loro accanita battaglia per la riconquista di un mondo distopico governato dalle macchine e ora invaso da potenti biomacchine. Delle biomacchine hanno invaso la Terra, obbligando l'umanità ad abbandonarla. In un ultimo sforzo per riprendersi il pianeta e annientare gli invasori, gli umani organizzano una resistenza formata da androidi-soldato. Ora sul pianeta infuria una guerra tra macchine e androidi...
            </p>
            <div className="tags mt-3">
              <span className="badge bg-secondary zone2">STORIA BEN CURATA</span>
              <span className="badge bg-secondary zone2">PROTAGONISTA FEMMINILE</span>
              <span className="badge bg-secondary zone2">HACK & SLASH</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5">
          <h2>NieR:Automata Game of The YoRHa Edition</h2>
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
            <h2 className="text-danger"><del>60€</del> 29.99€ <span className="text-success">-50%</span></h2>
          </div>
          <button className="btn btn-warning w-100 mb-3">Aggiungi al carrello</button>
          <div className="product-details">
            <h2>Informazioni prodotto</h2>
            <ul className="list-unstyled">
              <li><strong>PEGI:</strong> PEGI 18</li>
              <li><strong>Sviluppatore:</strong> Square Enix, PlatinumGames Inc</li>
              <li><strong>Publisher:</strong> Square Enix</li>
              <li><strong>Data di rilascio:</strong> 17 marzo 2017</li>
              <li><strong>Genere:</strong> Giocatore singolo, Azione, RPG</li>
              <li><strong>Ultime recensioni Locali:</strong> Molto positiva (1029)</li>
              <li><strong>Tutte le recensioni Locali:</strong> Molto positiva (95270)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <h2>Video e immagini del prodotto</h2>
          <div className="ratio ratio-16x9 mb-4">
            <iframe 
              src="https://www.youtube.com/embed/wJxNhJ8fjFk" 
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
            <p>NieR: Automata narra la storia degli androidi 2B, 9S e A2 e della loro accanita battaglia per la riconquista di un mondo distopico governato dalle macchine e ora invaso da potenti biomacchine.</p>
            <p>Delle biomacchine hanno invaso la Terra, obbligando l'umanità ad abbandonarla. In un ultimo sforzo per riprendersi il pianeta e annientare gli invasori, gli umani organizzano una resistenza formata da androidi-soldato. Ora sul pianeta infuria una guerra tra macchine e androidi... una guerra che presto porterà a galla la verità su questo mondo.</p>
            <p>*Per accedere a questo contenuto, dovrai aver progredito in un certo modo nella storia principale del gioco. Questo contenuto non sarà disponibile durante alcune scene dello scenario del gioco principale.Caratteristiche:</p>
            <p>Battaglie piene d’azione – Passa da attacchi in mischia ad attacchi a distanza mentre affronti orde di nemici e feroci boss in svariate mappe aperte. I comandi intuitivi e la fluidità dei combattimenti sono perfetti per i neofiti, ma nascondono anche una certa complessità per i giocatori più esperti. Puoi effettuare offensive estremamente veloci mescolando attacchi leggeri e pesanti e provare tutto il tuo arsenale di armi mentre schivi agilmente gli attacchi nemici.</p>
            <p>Un bellissimo e desolato open-world – Il gioco passa fluidamente da panorami mozzafiato a bellissime ambientazioni senza alcun tempo di caricamento. Gli ambienti girano in 60fps e contengono moltissime missioni secondarie che si intrecciano alla storia principale.</p>
            <p>Una storia e dei personaggi estremamente curati – NieR: Automata narra la storia degli androidi 2B, 9S e A2 e della loro accanita battaglia per la riconquista di un mondo distopico governato dalle macchine e ora invaso da potenti biomacchine.</p>
            <p>Elementi dei giochi di ruolo – Ottieni una serie di armi diverse, sali di livello in battaglia, apprendi nuove abilità di combattimento e personalizza il tuo equipaggiamento secondo il tuo stile di gioco.</p>
            <p>Usa i sistemi di supporto Pod sia dentro che fuori dalle battaglie – I Pod possono attaccare i nemici automaticamente o manualmente. Possono anche offrire assistenza al di fuori dalle battaglie, per esempio permettendo di muoversi per aria. Puoi anche potenziare i Pod con nuovi attacchi e modifiche.</p>
            <p>Una “modalità automatica” per i principianti – I giocatori meno esperti possono utilizzare la modalità automatica per attaccare e schivare più facilmente.</p>
          </div>
        )}
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <h2>Ultime notizie sul gioco</h2>
          <div className="news-item d-flex align-items-start mb-4">
            <img src={NewsImage4} alt="News 1" className="img-fluid me-3 rounded" style={{ width: '250px', height: 'auto' }} />
            <div>
              <p className="text-white mb-1">5 mesi fa</p>
              <h5 className="text-white">È probabile che NieR 3 sia stato svelato durante un concerto</h5>
              <p className="text-white">
                Il direttore della saga di NieR, Yoko Taro, ha fatto un'apparizione a sorpresa sul palco di un concerto dedicato alla saga. Durante l'evento, che si è svolto all'inizio del mese, è stato sottilmente accennato a un possibile terzo capitolo. 
              </p>
            </div>
          </div>
          <div className="news-item d-flex align-items-start mb-4">
            <img src={NewsImage5} alt="News 2" className="img-fluid me-3 rounded" style={{ width: '250px', height: 'auto' }} />
            <div>
              <p className="text-white mb-1">5 mesi fa</p>
              <h5 className="text-white">NieR: Automata raggiunge gli 8 milioni di copie spedite</h5>
              <p className="text-white">
                In prossimità del suo settimo anniversario, l'eccellente NieR: Automata continua a riscuotere un successo impressionante. Negli ultimi dieci mesi sono state vendute 500.000 unità in tutto il mondo. Di conseguenza, il gioco ha venduto oltre 8 milioni di copie in tutto il mondo. 
              </p>
            </div>
          </div>
          <div className="news-item d-flex align-items-start">
            <img src={NewsImage6} alt="News 3" className="img-fluid me-3 rounded" style={{ width: '250px', height: 'auto' }} />
            <div>
              <p className="text-white mb-1">8 mesi fa</p>
              <h5 className="text-white">Altri giochi in arrivo per la saga di NieR</h5>
              <p className="text-white">
                I fan del franchise di NieR possono stare tranquilli: il suo creatore non ha intenzione di abbandonarlo. Durante un'intervista al G-STAR 2023 in Corea del Sud, Yosuke Saito ha parlato del futuro della licenza. Secondo quanto riporta 4gamer, il produttore afferma che la serie continuerà 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
