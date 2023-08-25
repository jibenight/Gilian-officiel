import './Bio.css';
import { motion as m } from 'framer-motion';
import ButtonClose from '../close/ButtonClose';

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
        <h2>Gilian</h2>
        <ButtonClose closeComponent={closeComponent} />
      </div>
      <div id='bio'>
        <p>
          Né le 2 mars 1998, Gilian se révèle être un artiste aux multiples
          facettes, agissant en tant que compositeur, parolier et interprète,
          enraciné dans la charmante ville de Nîmes. À l'aube de ses 16 ans, il
          fait une découverte qui allait changer sa vie : la musique. Animé
          d'une passion dévorante, il s'immerge dans l'univers artistique en
          prenant des leçons de chant, de piano, de théâtre, de danse et même de
          comédie musicale.
        </p>
        <p>
          Ces compétences acquises au fil du temps deviennent les pierres
          angulaires de son parcours musical. De cette richesse naît un groupe
          100% gardois baptisé les "Lemonade For Andrea", où Gilian occupe le
          rôle de pianiste. Cette collaboration fructueuse donne naissance à un
          premier EP intitulé "Lemonade". L'un des moments marquants est la
          réalisation d'un clip pour la chanson "Growing Up Girl", tourné au
          cœur d'un restaurant de Nîmes. Les airs pop folk à l'américaine
          définissent cette aventure musicale.
        </p>
        <p>
          Cependant, fidèle à ses racines, Gilian revient à ses premières
          amours, la chanson de variété française. Dans cette optique, il
          entreprend la formation d'une équipe solide, qui deviendra le moteur
          pour la concrétisation de son tout premier EP en solo. Les textes
          qu'il écrit, porteurs d'engagement, s'harmonisent avec des sonorités
          contemporaines. Cette création musicale devient le prélude d'une
          aventure créative, bâtie sur les fondations de la collaboration et du
          partage.
        </p>
      </div>
    </m.div>
  );
}

export default Bio;
