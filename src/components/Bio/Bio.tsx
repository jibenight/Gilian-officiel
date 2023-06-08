import './Bio.css';
import { motion as m } from 'framer-motion';
import ButtonClose from '../ButtonClose/ButtonClose';

function Bio({ closeComponent }) {
  return (
    <m.div
      className='background-item'
      key='Bio'
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='sub-title'>
        <h2>Bio</h2>
        <ButtonClose closeComponent={closeComponent} />
      </div>
    </m.div>
  );
}

export default Bio;
