import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faGift, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import '../Style/BannerAnnuncio.css';
import backgroundImage from '../Images/cover-1920-bd460362.jpg';

const PromoBanner = () => {
  const bannerRef = useRef(null);
  const scrollStarted = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = bannerRef.current;
      if (scrollStarted.current) {
        banner.style.backgroundPositionY = `${(window.scrollY - banner.offsetTop) * 0}px`;
      } else {
        banner.style.backgroundPositionY = 'center';
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          scrollStarted.current = true;
        } else {
          scrollStarted.current = false;
        }
      },
      { threshold: 0.5 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="promo-banner"
      ref={bannerRef}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2>Vuoi Accedere al Nostro Immenso Catalogo?</h2>
      <div className="promo-items">
        <div className="promo-item">
          <FontAwesomeIcon icon={faPercent} className="icon" />
          <p>Sconti Riservati sui giochi</p>
        </div>
        <div className="promo-item">
          <FontAwesomeIcon icon={faGift} className="icon" />
          <p>Regali per gli utenti Fedeli</p>
        </div>
        <div className="promo-item">
          <FontAwesomeIcon icon={faCreditCard} className="icon" />
          <p>Pagamenti Online</p>
        </div>
      </div>
      <button>Accedi al Catalogo</button>
    </div>
  );
};

export default PromoBanner;