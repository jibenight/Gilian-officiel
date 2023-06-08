import { motion as m } from 'framer-motion';
import './Tracks.css';
import ButtonClose from '../ButtonClose/ButtonClose';

function Tracks({ closeComponent }) {
  return (
    <m.div
      className='background-item'
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100vh', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='sub-title'>
        <h2>Tracks</h2>
        <ButtonClose closeComponent={closeComponent} />
      </div>
    </m.div>
  );
}

export default Tracks;
