import { useState } from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import Menu from '../Menu/Menu';

interface Offset {
  x: number;
  y: number;
}
const spring = {
  type: 'spring',
  stiffness: 100,
  damping: 10,
};

const HomePage: React.FC = () => {
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setOffset({
      x: (event.clientX / window.innerWidth - 0.5) * 100,
      y: (event.clientY / window.innerHeight - 0.5) * 100,
    });
  };

  return (
    <div className='homepage' onMouseMove={handleMouseMove}>
      <Menu />
      <motion.div
        className='background'
        style={{
          x: offset.x / 5,
          y: offset.y / 5,
          scale: 1.05,
          transition: spring,
        }}
      >
        <img src='/Gilian-background.webp' alt='' />
        <picture>
          <source
            media='(max-width: 799px)'
            srcSet='/gilian-background-mobile.webp'
          />
          <source media='(min-width: 800px)' srcSet='Gilian-background.webp' />
          <img src='/Gilian-background.webp' alt='' />
        </picture>
      </motion.div>
      <motion.div
        className='portrait'
        style={{
          x: offset.x / 10,
          y: offset.y / 10,
          scale: 1.02,
          transition: spring,
        }}
      >
        <picture>
          <source
            media='(max-width: 799px)'
            srcSet='/gilian-portrait-mobile.webp'
          />
          <source media='(min-width: 800px)' srcSet='/gilian-portrait.webp' />
          <img src='/gilian-portrait.webp' alt='' />
        </picture>
      </motion.div>
      <motion.div
        className='content'
        style={{
          x: offset.x / 15,
          y: offset.y / 15,
          transition: spring,
        }}
      >
        <h1>Gilian</h1>

        <div className='buttons'>
          <h2>L'envole du phoenix</h2>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img src='/play.svg' alt='' />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <img src='/screen.svg' alt='' />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
