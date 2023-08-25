import './ButtonClose.css';
import closeIcon from '../../assets/images/icons/close.svg';

function ButtonClose({ closeComponent }) {
  return (
    <div className='close-icon' onClick={() => closeComponent('')}>
      <img src={closeIcon} alt='icon en croix pour la fermeture' />
    </div>
  );
}

export default ButtonClose;
