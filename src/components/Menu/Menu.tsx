import './Menu.css';

function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href='#'>
              <picture>
                <source media='(max-width: 799px)' srcSet='/music.svg' />
                <source media='(min-width: 800px)' srcSet='/music.svg' />
                <img src='/music.svg' alt="Description de l'image" />
                <figcaption>Tracks</figcaption>
              </picture>
            </a>
          </li>
          <li>
            <a href='#'>
              <picture>
                <source media='(max-width: 799px)' srcSet='/shooting.svg' />
                <source media='(min-width: 800px)' srcSet='/shooting.svg' />
                <img src='/shooting.svg' alt="Description de l'image" />
                <figcaption>Shooting</figcaption>
              </picture>
            </a>
          </li>
          <li>
            <a href='#'>
              <picture>
                <source media='(max-width: 799px)' srcSet='/profil.svg' />
                <source media='(min-width: 800px)' srcSet='/profil.svg' />
                <img src='/profil.svg' alt="Description de l'image" />
                <figcaption>Bio</figcaption>
              </picture>
            </a>
          </li>
          <li>
            <a href='#'>
              <picture>
                <source media='(max-width: 799px)' srcSet='/mail.svg' />
                <source media='(min-width: 800px)' srcSet='/mail.svg' />
                <img src='/mail.svg' alt="Description de l'image" />
                <figcaption>mail</figcaption>
              </picture>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
