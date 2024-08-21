// ChiSiamo.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleChiSiamo/PresentazionePagina.css'; 
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
            Siamo un'azienda leader nel settore e-commerce, specializzata nella vendita di videogiochi per tutte le piattaforme. 
            Offriamo una vasta gamma di titoli, dai classici ai più recenti, per soddisfare le esigenze di ogni tipo di giocatore.
          </p>
          <p>
            La nostra piattaforma è progettata per rendere l'acquisto di videogiochi semplice e veloce, con offerte esclusive 
            e promozioni speciali per i nostri clienti. Garantiamo un servizio di alta qualità, con supporto continuo e 
            consegne rapide per tutti i nostri prodotti.
          </p>
          <p>
            Inoltre, siamo all'avanguardia nel cloud gaming, offrendo ai nostri clienti la possibilità di giocare ai loro 
            titoli preferiti direttamente dal cloud, senza bisogno di hardware costoso. La nostra missione è offrire 
            un'esperienza di gioco completa, sia per chi preferisce acquistare e giocare in locale, sia per chi sceglie 
            il cloud gaming.
          </p>
        </div>
        
        <div>
          <div className="row my-5">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h3>Acquista e gioca in locale o sul cloud</h3>
                <p>
                  Offriamo una vasta libreria di videogiochi per l'acquisto immediato, con la possibilità di giocare 
                  in locale o direttamente dal cloud. Scegli il metodo che preferisci e inizia subito a giocare!
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={newImage} alt="Acquista e gioca in locale o sul cloud" className="img-fluid"/>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-6">
              <img src={newImage2} alt="La piattaforma di acquisto più leggera e veloce" className="img-fluid"/>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h3>La piattaforma di acquisto più leggera e veloce</h3>
                <p>
                  La nostra piattaforma è ottimizzata per una navigazione rapida e un acquisto facile, con una vasta gamma 
                  di giochi tra cui scegliere. Inoltre, supportiamo il cloud gaming per chi desidera una soluzione più leggera e flessibile.
                </p>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h3>Esperienza di gioco su misura</h3>
                <p>
                  Offriamo un'esperienza di gioco personalizzabile, sia che tu scelga di giocare su PC, console o tramite 
                  il cloud. La qualità tecnica dei nostri prodotti garantisce un'esperienza di gioco eccezionale.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={newImage3} alt="Esperienza di gioco su misura" className="img-fluid"/>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-6">
              <img src={newImage4} alt="Il mostro delle prestazioni" className="img-fluid"/>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h3>Il mostro delle prestazioni</h3>
                <p>
                  Raggiungi prestazioni incredibili con giochi a 240 FPS per un'esperienza fluida e a bassa latenza, 
                  sia che giochi in locale o nel cloud. Il nostro servizio garantisce sempre il meglio per i nostri giocatori.
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
