import './Button.css';

interface ButtonProps {
  labelRu?: string;
  labelEn?: string;
  lang: 'en' | 'ru';
  onClick?: () => void;
  onSubmit?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  lang,
  labelRu,
  labelEn,
  onClick,
  onSubmit,
}) => {
  const handleClick = () => {
    if (onSubmit) {
      onSubmit();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      {lang === 'ru' ? labelRu : labelEn}
    </button>
  );
};
