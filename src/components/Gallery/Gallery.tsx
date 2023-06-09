import './Gallery.css';
import { motion as m } from 'framer-motion';
import ButtonClose from '../ButtonClose/ButtonClose';

interface Props {
  closeComponent: (componentName: string) => void;
}

const Gallery: React.FC<Props> = ({ closeComponent }) => {
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
        <h2>Gallery</h2>
        <ButtonClose closeComponent={closeComponent} />
      </div>
    </m.div>
  );
};

export default Gallery;
