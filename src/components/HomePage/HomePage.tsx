import React, { useState } from 'react';
import './HomePage.css';
import Tracks from '../Tracks/Tracks';
import Bio from '../Bio/Bio';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Menu from '../Menu/Menu';

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
      {currentComponent === '' && <h1>Gilian</h1>}
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
    </div>
  );
}

export default HomePage;
