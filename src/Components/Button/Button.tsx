import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string; // Свойство для текста кнопки
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
