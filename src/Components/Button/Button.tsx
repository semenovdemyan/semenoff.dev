import './Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  onSubmit?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, onSubmit }) => {
  const handleClick = () => {
    if (onSubmit) {
      onSubmit(); // Вызов onSubmit, если он передан
    }
    if (onClick) {
      onClick(); // Вызов onClick, если он передан
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      {label}
    </button>
  );
};
