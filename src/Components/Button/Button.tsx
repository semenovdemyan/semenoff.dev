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
  children?: ReactNode; // Добавляем поддержку children
}

export const Button: React.FC<ButtonProps> = ({
  lang,
  label,
  labelRu,
  labelEn,
  onClick,
  onSubmit,
  icon = false,
  children, // Деструктурируем children
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
      {children || label}{' '}
      {/* Если есть children, отобразим их, если нет - label */}
      {lang === 'ru' ? labelRu : labelEn}
    </button>
  );
};
