import './Contact.css';
import { motion as m } from 'framer-motion';
import ButtonClose from '../close/ButtonClose';
import contact from '../../assets/images/mail.svg';
import tiktok from '../../assets/images/tiktok.svg';
import instagram from '../../assets/images/instagram.svg';
import facebook from '../../assets/images/facebook.svg';

function Contact({ closeComponent }) {
  return (
    <m.div
      className='background-item'
      key='Contact'
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='sub-title'>
        <h2>Contact</h2>
        <ButtonClose closeComponent={closeComponent} />
      </div>
      <div id='contact'>
        <picture>
          <source media='(max-width: 799px)' srcSet={contact} />
          <source media='(min-width: 800px)' srcSet={contact} />
          <img src={contact} alt="Description de l'image" />
          <figcaption>contact@gilian-officiel.com</figcaption>
        </picture>

        <div id='network'>
          <picture>
            <source media='(max-width: 799px)' srcSet={facebook} />
            <source media='(min-width: 800px)' srcSet={facebook} />
            <img src={facebook} alt="Description de l'image" />
            <figcaption>facebook</figcaption>
          </picture>
          <picture>
            <source media='(max-width: 799px)' srcSet={instagram} />
            <source media='(min-width: 800px)' srcSet={instagram} />
            <img src={instagram} alt="Description de l'image" />
            <figcaption>instagram</figcaption>
          </picture>
          <picture>
            <source media='(max-width: 799px)' srcSet={tiktok} />
            <source media='(min-width: 800px)' srcSet={tiktok} />
            <img src={tiktok} alt="Description de l'image" />
            <figcaption>tiktok</figcaption>
          </picture>
        </div>
      </div>
    </m.div>
  );
}

export default Contact;
