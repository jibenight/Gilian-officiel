import './ButtonClose.css';

function ButtonClose({ closeComponent }) {
  return (
    <div className='close-icon' onClick={() => closeComponent('')}>
      <img src='/close.svg' alt='icon en croix pour la fermeture' />
    </div>
  );
}

export default ButtonClose;
