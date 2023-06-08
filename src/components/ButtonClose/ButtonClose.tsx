import './ButtonClose.css';

function ButtonClose({ closeComponent }) {
  return (
    <div className='close-icon' onClick={closeComponent}>
      <img src='/close.svg' alt='' srcSet='' />
    </div>
  );
}

export default ButtonClose;
