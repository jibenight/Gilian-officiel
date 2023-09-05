import React, { useState, useEffect } from 'react';
import './Gallery.css';
import { motion as m } from 'framer-motion';
import ButtonClose from '../close/ButtonClose';
import photos from './photoData';
import swipeIcon from '../../assets/images/swipe-left.svg';

function Gallery({ closeComponent }) {
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const swiperEl = document.querySelector('.mySwiper');
    console.log(swiperEl);
    const onSlideChange = () => {
      if (swiperEl.swiper.activeIndex === 2) {
        setShowIcon(false);
      }
    };

    swiperEl.addEventListener('slideChange', onSlideChange);

    return () => swiperEl.removeEventListener('slideChange', onSlideChange);
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
            initial={{ rotate: 90 }}
            animate={{ rotate: -20 }}
            transition={{ duration: 1, repeat: Infinity }}
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
