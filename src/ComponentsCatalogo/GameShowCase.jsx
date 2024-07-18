import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../StyleCatalogo/GameShowCase.css';
import { Link } from 'react-router-dom';
import Image from '../Images/World-of-Tanks-Blitz.jpg'
import Image2 from '../Images/download.jpeg'
import Image3 from '../Images/download (1).jpeg'
import Image4 from '../Images/Apex.jpeg'
import Image5 from '../Images/war robots.jpeg'
import Image6 from '../Images/Magic.jpeg'
import Image7 from '../Images/DCS.jpeg'
import Image8 from '../Images/path of exile.webp'
import Image9 from '../Images/Forza horizon.jpeg'
import Image10 from '../Images/need for speed.jpeg'
import Image11 from '../Images/gran turismo.jpeg'
import Image12 from '../Images/Project cars 3.jpeg'
import Image13 from '../Images/ghost-of-tsushima-director-s-cut-pc-gioco-steam-cover.jpg'
import Image14 from '../Images/death stranding.jpeg'
import Image15 from '../Images/Control.jpeg'
import Image16 from '../Images/wastland2.jpeg'
import Image17 from '../Images/remastered the last.jpeg'
import Image18 from '../Images/dark remaster.png'
import Image19 from '../Images/shadow of colossus.jpeg'
import Image20 from '../Images/resident evil 3.jpeg'

const GameShowcase = () => {
  const gameCategories = [
    {
      title: 'GIOCHI CON L\'ETICHETTA "SPARATUTTO"',
      description: 'Dato il tempo che hai trascorso di recente in giochi con l\'etichetta "Sparatutto"',
      games: [
        {
          id: 'battlefield-2042',
          title: 'Battlefield™ 2042',
          price: '59,99€',
          imageUrl: Image2,
        },
        {
          id: 'world-of-tanks-blitz',
          title: 'World of Tanks Blitz',
          price: 'Free-to-Play',
          imageUrl: Image,
        },
        {
          id: 'call-of-duty-modern-warfare',
          title: 'Call of Duty: Modern Warfare',
          price: '69,99€',
          imageUrl: Image3,
        },
        {
          id: 'apex-legends',
          title: 'Apex Legends',
          price: 'Free-to-Play',
          imageUrl: Image4,
        },
      ],
    },
    {
      title: 'GIOCHI CON L\'ETICHETTA "FREE-TO-PLAY"',
      description: 'Dato il tempo che hai trascorso di recente in giochi con l\'etichetta "Free-to-Play"',
      games: [
        {
          id: 'war-robots',
          title: 'War Robots',
          price: 'Free To Play',
          imageUrl: Image5,
        },
        {
          id: 'path-of-exile',
          title: 'Path of Exile',
          price: 'Free-to-Play',
          imageUrl: Image8,
        },
        {
          id: 'magic-the-gathering-arena',
          title: 'Magic: The Gathering Arena',
          price: 'Free To Play',
          imageUrl: Image6,
        },
        {
          id: 'dcs-world-steam-edition',
          title: 'DCS World Steam Edition',
          price: 'Gratis',
          imageUrl: Image7,
        },
      ],
    },
    {
      title: 'GIOCHI CON L\'ETICHETTA "GIOCHI DI CORSA"',
      description: 'Dato il tempo che hai trascorso di recente in giochi con l\'etichetta "Simulatori Di Corsa"',
      games: [
        {
          id: 'forza-horizon-4',
          title: 'Forza Horizon 4',
          price: '49,99€',
          imageUrl: Image9,
        },
        {
          id: 'need-for-speed-heat',
          title: 'Need for Speed Heat',
          price: '69,99€',
          imageUrl: Image10,
        },
        {
          id: 'gran-turismo-sport',
          title: 'Gran Turismo Sport',
          price: '39,99€',
          imageUrl: Image11,
        },
        {
          id: 'project-cars-3',
          title: 'Project CARS 3',
          price: '59,99€',
          imageUrl: Image12,
        },
      ],
    },
    {
      title: 'GIOCHI CON L\'ETICHETTA "DIRECTOR\'S CUT"',
      description: 'Dato il tempo che hai trascorso di recente in giochi con l\'etichetta "Director\'s Cut"',
      games: [
        {
          id: 'ghost-of-tsushima-directors-cut',
          title: 'Ghost of Tsushima Director\'s Cut',
          price: '79,99€',
          imageUrl: Image13,
        },
        {
          id: 'death-stranding-directors-cut',
          title: 'Death Stranding Director\'s Cut',
          price: '49,99€',
          imageUrl: Image14,
        },
        {
          id: 'control-ultimate-edition',
          title: 'Control Ultimate Edition',
          price: '39,99€',
          imageUrl: Image15,
        },
        {
          id: 'westland',
          title: 'WestLand 2 Director\'s Cut',
          price: '39,99€',
          imageUrl: Image16,
        },
      ],
    },
    {
      title: 'GIOCHI CON L\'ETICHETTA "REMASTERED"',
      description: 'Dato il tempo che hai trascorso di recente in giochi con l\'etichetta "Remastered"',
      games: [
        {
          id: 'the-last-of-us-remastered',
          title: 'The Last of Us Remastered',
          price: '19,99€',
          imageUrl: Image17,
        },
        {
          id: 'dark-souls-remastered',
          title: 'Dark Souls Remastered',
          price: '39,99€',
          imageUrl: Image18,
        },
        {
          id: 'shadow-of-the-colossus',
          title: 'Shadow of the Colossus',
          price: '29,99€',
          imageUrl: Image19,
        },
        {
          id: 'resident-evil-3',
          title: 'Resident Evil 3 Remake',
          price: '49,99€',
          imageUrl: Image20,
        },
      ],
    },
  ];

  return (
    <div className="container mt-4">
      {gameCategories.map((category, index) => (
        <div key={index} className="mb-5">
          <h3 className="text-primary">{category.title}</h3>
          <p>{category.description}</p>
          <div className="row">
            {category.games.map((game, idx) => (
              <div key={idx} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card game-card">
                  <Link to={`/Catalogo/game/${game.id}`}>
                    <img src={game.imageUrl} alt={game.title} className="card-img-top" />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{game.title}</h5>
                    <p className="card-text">{game.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameShowcase;
