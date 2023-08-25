import './Gallery.css';
import { motion as m } from 'framer-motion';
import ButtonClose from '../close/ButtonClose';

// library from assets
import photos from './photoData';

function Gallery({ closeComponent }) {
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
