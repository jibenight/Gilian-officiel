import { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

import './HomePage.css';
import Tracks from '../music-ep/Tracks';
import Bio from '../about/Bio';
import Gallery from '../shooting/Gallery';
import Contact from '../contacts/Contact';
import Menu from '../navigation/Menu';
import Mention from '../Mention/Mention';
import textImage from '../../assets/images/photos/homepage/text-mask.webp';

function HomePage() {
  const [currentComponent, setCurrentComponent] = useState('');
  const [showMention, setShowMention] = useState(false);

  function closeComponent() {
    setCurrentComponent('');
  }

  function handleMentionClick() {
    setCurrentComponent(''); // Ferme le composant actuel et le menu
    setShowMention(true); // Affiche Mention
  }

  return (
    <div id='homepage'>
      {currentComponent === '' && !showMention && (
        <Menu setCurrentComponent={setCurrentComponent} />
      )}

      {currentComponent === '' && (
        <m.div
          id='texte-logo'
          key='titre1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={textImage}
            alt='Gilian artiste/chanteur'
            width='320px'
            height='320px'
          />
        </m.div>
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
          <Contact
            closeComponent={closeComponent}
            openMention={handleMentionClick}
          />
        )}
        {showMention && (
          <Mention
            closeComponent={() => {
              setShowMention(false);
              setCurrentComponent('');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default HomePage;
