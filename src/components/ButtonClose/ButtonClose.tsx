import './ButtonClose.css';

interface ButtonCloseProps {
  closeComponent: (componentName: string) => void;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({ closeComponent }) => {
  return (
    <div className='close-icon' onClick={() => closeComponent('')}>
      <img src='/close.svg' alt='icon en croix pour la fermeture' />
    </div>
  );
};

export default ButtonClose;
