import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { motion as m } from 'framer-motion';
import ButtonClose from '../close/ButtonClose';
import photos from './photoData';
import swipeIcon from '../../assets/images/swipe-left.svg';

function Gallery({ closeComponent }) {
  const [showIcon, setShowIcon] = useState(true);
  const [startFadeOut, setStartFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartFadeOut(true); // commencez l'effet de fade out
      // Supprimez l'icône après l'animation (1 seconde ici)
      setTimeout(() => {
        setShowIcon(false);
      }, 1000);
    }, 2000);

    // Effacez les timers lorsque le composant est désassemblé pour éviter des erreurs
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <m.div
      className='background-item'
      key='Gallery'
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='sub-title'>
        <h2>Shooting photos</h2>
        <ButtonClose closeComponent={closeComponent} />
      </div>

      <div id='gallery'>
        {showIcon && (
          <m.img
            src={swipeIcon}
            alt='Swipe left icon'
            initial={{ x: 0, opacity: 1 }}
            animate={startFadeOut ? { x: -20, opacity: 0 } : { x: -20 }} // un petit décalage à gauche
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }} // cela fait que l'animation retourne à son état d'origine après chaque cycle
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
            }}
          />
        )}

        <swiper-container
          class='mySwiper'
          pagination='true'
          effect='coverflow'
          grab-cursor='true'
          centered-slides='true'
          slides-per-view='auto'
          coverflow-effect-rotate='50'
          coverflow-effect-stretch='0'
          coverflow-effect-depth='100'
          coverflow-effect-modifier='1'
          coverflow-effect-slide-shadows='false'
        >
          {photos.map((photo, index) => (
            <swiper-slide key={index}>
              <picture>
                <source media='(max-width: 767px)' srcSet={photo.mobile} />
                <source media='(min-width: 768px)' srcSet={photo.desktop} />
                <img src={photo.desktop} alt={photo.figcaption} />
              </picture>
              <figcaption>{photo.figcaption}</figcaption>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </m.div>
  );
}

export default Gallery;
