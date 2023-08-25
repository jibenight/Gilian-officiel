import './Contact.css';
import { motion as m } from 'framer-motion';
import ButtonClose from '../close/ButtonClose';
import contact from '../../assets/images/mail-contact.svg';
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
        <div id='mail'>
          <a href='mailto:contact@gilian-officiel.com'>
            <picture>
              <source media='(max-width: 799px)' srcSet={contact} />
              <source media='(min-width: 800px)' srcSet={contact} />
              <img src={contact} alt="Description de l'image" />
              <figcaption>Envoyez-moi un e-mail</figcaption>
            </picture>
          </a>
        </div>
        <div id='network'>
          {/* icon  */}
          <div className='network-icon'>
            <a href=''>
              <img src={facebook} alt='logo de la page facebook de gilian' />
            </a>
          </div>
          <div className='network-icon'>
            <a href=''>
              <img src={instagram} alt='logo de la page instagram de gilian' />
            </a>
          </div>
          <div className='network-icon'>
            <a href=''>
              <img src={tiktok} alt='logo de la page tiktok de gilian' />
            </a>
          </div>
        </div>

        <div id='mention'>
          <p>
            <a href=''>Mentions légales</a>
          </p>
          <p>
            Copyright © 2023 ♪{' '}
            <a href='https//:jdesign.com' target='_blank'>
              Jdesign
            </a>
          </p>
        </div>
      </div>
    </m.div>
  );
}

export default Contact;
