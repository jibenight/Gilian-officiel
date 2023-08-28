import './Mention.css';
import { motion as m } from 'framer-motion';
import ButtonClose from '../close/ButtonClose';

function Mention({ closeComponent }) {
  return (
    <m.div
      className='background-item'
      key='mention'
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='sub-title'>
        <h2>Mentions légales</h2>
        <ButtonClose closeComponent={closeComponent} />
      </div>
      <div id='mention'>
        <p>
          Le site web est édité par Gillian Cannet, propriétaire et directeur de
          la publication. Le site est un portfolio présentant les œuvres et
          projets musicaux de l'artiste.
        </p>

        <h3>Hébergement:</h3>
        <p>
          Le site est hébergé par O2switch, dont l'adresse est la suivante :
          Chemin des Pardiaux, 63000 Clermont-Ferrand, France. Pour toute
          question concernant l'hébergement du site, veuillez contacter
          directement O2switch.
        </p>

        <h3>Droits d'auteur:</h3>
        <p>
          Tous les contenus présents sur ce site, incluant, sans limitation, les
          textes, les images, les vidéos et les enregistrements audio, sont
          protégés par les droits d'auteur. Toute reproduction ou utilisation
          non autorisée de ces contenus est interdite sans l'accord préalable
          écrit de Gillian Cannet.
        </p>
        <h3>Contact:</h3>
        <p>
          Pour toute question ou demande concernant ce site ou son contenu,
          veuillez contacter Gillian Cannet à travers la page de contact du site
          ou par email à l'adresse indiquée sur le site.
        </p>
      </div>
    </m.div>
  );
}

export default Mention;
