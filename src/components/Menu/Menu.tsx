import './Menu.css';
import { motion as m } from 'framer-motion';

interface MenuProps {
  setCurrentComponent: (componentName: string) => void;
}

const Menu: React.FC<MenuProps> = ({ setCurrentComponent }) => {
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
              <source media='(max-width: 799px)' srcSet='/music.svg' />
              <source media='(min-width: 800px)' srcSet='/music.svg' />
              <img src='/music.svg' alt="Description de l'image" />
              <figcaption>Tracks</figcaption>
            </picture>
          </li>
          <li onClick={() => setCurrentComponent('Gallery')}>
            <picture>
              <source media='(max-width: 799px)' srcSet='/shooting.svg' />
              <source media='(min-width: 800px)' srcSet='/shooting.svg' />
              <img src='/shooting.svg' alt="Description de l'image" />
              <figcaption>Gallery</figcaption>
            </picture>
          </li>
          <li onClick={() => setCurrentComponent('Bio')}>
            <picture>
              <source media='(max-width: 799px)' srcSet='/profil.svg' />
              <source media='(min-width: 800px)' srcSet='/profil.svg' />
              <img src='/profil.svg' alt="Description de l'image" />
              <figcaption>Bio</figcaption>
            </picture>
          </li>
          <li onClick={() => setCurrentComponent('Contact')}>
            <picture>
              <source media='(max-width: 799px)' srcSet='/mail.svg' />
              <source media='(min-width: 800px)' srcSet='/mail.svg' />
              <img src='/mail.svg' alt="Description de l'image" />
              <figcaption>Contact</figcaption>
            </picture>
          </li>
        </ul>
      </nav>
    </m.header>
  );
};

export default Menu;
