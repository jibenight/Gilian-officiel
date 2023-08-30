import './Menu.css';
import music from '../../assets/images/icons/song.svg';
import gallery from '../../assets/images/icons/gallery.svg';
import bio from '../../assets/images/icons/user.svg';
import contact from '../../assets/images/icons/mail.svg';
import { motion as m } from 'framer-motion';

function Menu({ setCurrentComponent }) {
  return (
    <m.header
      key='Menu'
      initial={{ y: '-100', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <ul>
          <li onClick={() => setCurrentComponent('Tracks')}>
            <picture>
              <source media='(max-width: 799px)' srcSet={music} />
              <source media='(min-width: 800px)' srcSet={music} />
              <img
                src={music}
                alt="Description de l'image"
                width='60px'
                height='60px'
              />
              <figcaption>Tracks</figcaption>
            </picture>
          </li>
          <li onClick={() => setCurrentComponent('Gallery')}>
            <picture>
              <source media='(max-width: 799px)' srcSet={gallery} />
              <source media='(min-width: 800px)' srcSet={gallery} />
              <img
                src={gallery}
                alt="Description de l'image"
                width='60px'
                height='60px'
              />
              <figcaption>Gallery</figcaption>
            </picture>
          </li>
          <li onClick={() => setCurrentComponent('Bio')}>
            <picture>
              <source media='(max-width: 799px)' srcSet={bio} />
              <source media='(min-width: 800px)' srcSet={bio} />
              <img
                src={bio}
                alt="Description de l'image"
                width='60px'
                height='60px'
              />
              <figcaption>Bio</figcaption>
            </picture>
          </li>
          <li onClick={() => setCurrentComponent('Contact')}>
            <picture>
              <source media='(max-width: 799px)' srcSet={contact} />
              <source media='(min-width: 800px)' srcSet={contact} />
              <img
                src={contact}
                alt="Description de l'image"
                width='60px'
                height='60px'
              />
              <figcaption>Contact</figcaption>
            </picture>
          </li>
        </ul>
      </nav>
    </m.header>
  );
}

export default Menu;
