import styles from './Button.module.css';
import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  label?: ReactNode;
  labelRu?: string;
  labelEn?: string;
  lang?: 'en' | 'ru';
  onClick?: () => void;
  onSubmit?: () => void;
  icon?: boolean;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  lang,
  label,
  labelRu,
  labelEn,
  onClick,
  onSubmit,
  icon = false,
  children,
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
    <button className={icon ? styles.icon : styles.btn} onClick={handleClick}>
      {children || label} {lang === 'ru' ? labelRu : labelEn}
    </button>
  );
};
