// ChiSiamo.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleChiSiamo/PresentazionePagina.css'; // Import the CSS file
import newImage from '../Images/CloudImage.png';
import newImage2 from '../Images/Platform cloud.png';
import newImage3 from '../Images/gameControl1.png';
import newImage4 from '../Images/performance and velocity.png';

const ChiSiamo = () => {
  return (
    <div className="full-width-background">
      <div className="container margin">
        <div className="text-center">
          <h1 className="mb-4">Chi siamo</h1>
          <p>
            Siamo un'azienda leader del settore e-commerce per la vendita e l'uso del cloud dei videogiochi. Offriamo 
            una piattaforma avanzata che consente agli utenti di acquistare, scaricare e giocare ai loro giochi preferiti 
            direttamente dal cloud, eliminando la necessità di hardware costoso e ingombrante.
          </p>
          <p>
            La nostra piattaforma è progettata per offrire prestazioni superiori e un'esperienza di gioco ottimale, 
            utilizzando le più recenti tecnologie cloud. Forniamo opzioni personalizzabili per soddisfare le esigenze 
            di ogni giocatore, garantendo accesso immediato ai giochi con qualità HD e senza tempi di attesa.
          </p>
          <p>
            Grazie alla nostra vasta gamma di offerte, premi e token, i giocatori possono beneficiare di vantaggi esclusivi 
            e di un'esperienza di gioco coinvolgente e gratificante. La nostra missione è rivoluzionare il modo in cui 
            i giochi vengono acquistati e giocati, portando l'innovazione del cloud gaming a un nuovo livello.
          </p>
        </div>
        
        <div>
          <div className="row my-5">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h3>Gioca in locale o sul cloud</h3>
                <p>
                  La nostra piattaforma è progettata per offrire prestazioni superiori e un'esperienza di gioco ottimale, 
                  utilizzando le più recenti tecnologie cloud. Forniamo opzioni personalizzabili per soddisfare le esigenze 
                  di ogni giocatore, garantendo accesso immediato ai giochi con qualità HD e senza tempi di attesa.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={newImage} alt="Gioca in locale o sul cloud" className="img-fluid"/>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-6">
              <img src={newImage2} alt="La piattaforma di gioco più leggera e veloce" className="img-fluid"/>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h3>La piattaforma di gioco più leggera e veloce</h3>
                <p>
                  con tempi di configurazione fino al 50% più rapidi e consuma fino al 50% in meno di utilizzo della RAM 
                  rispetto ad altre piattaforme. Offre una vasta libreria di giochi di oltre 2 milioni di giochi ed è 
                  considerato affidabile da oltre 500 milioni di giocatori in tutto il mondo.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h3>Gameplay simile a un PC con le stesse qualità tecniche</h3>
                <p>
                  Tutti i nostri giocatori possono usufruire di un servizio cloud che mette in prima linea la qualità 
                  tecnica dei nostri prodotti!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={newImage3} alt="Gioca in locale o sul cloud" className="img-fluid"/>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-6">
              <img src={newImage4} alt="La piattaforma di gioco più leggera e veloce" className="img-fluid"/>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h3>Il mostro delle prestazioni</h3>
                <p>
                  Inoltre è possibile raggiungere fino a 240 fotogrammi al secondo (FPS). Con FPS elevati, i giocatori 
                  sbloccano un gameplay a bassa latenza e transizioni di gioco più fluide per la migliore esperienza di gioco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSiamo;
