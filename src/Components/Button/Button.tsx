import './Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  onSubmit?: () => void; // Переименуйте для ясности
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, onSubmit }) => {
  const handleClick = () => {
    if (onSubmit) {
      onSubmit(); // Вызовите onSubmit, если он передан
    }
    if (onClick) {
      onClick(); // Вызовите onClick, если он передан
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      {label}
    </button>
  );
};
