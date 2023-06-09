import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

import './HomePage.css';
import Tracks from '../tracks/Tracks';
import Bio from '../bio/Bio';
import Gallery from '../gallery/Gallery';
import Contact from '../contact/Contact';
import Menu from '../menu/Menu';

function HomePage() {
  const [currentComponent, setCurrentComponent] = useState('');

  function closeComponent() {
    setCurrentComponent('');
  }

  return (
    <div id='homepage'>
      {currentComponent === '' && (
        <Menu setCurrentComponent={setCurrentComponent} />
      )}
      {currentComponent === '' && (
        <m.h1
          key='titre1'
          initial={{ y: '100', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Gilian
        </m.h1>
      )}
      <AnimatePresence mode='wait'>
        {currentComponent === 'Tracks' && (
          <Tracks closeComponent={closeComponent} />
        )}
        {currentComponent === 'Gallery' && (
          <Gallery closeComponent={closeComponent} />
        )}
        {currentComponent === 'Bio' && <Bio closeComponent={closeComponent} />}
        {currentComponent === 'Contact' && (
          <Contact closeComponent={closeComponent} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomePage;
