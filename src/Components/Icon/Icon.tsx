//Icon.tsx
import React from 'react';

interface IconProps {
  src: string; // Путь к SVG файлу
}

export const Icon: React.FC<IconProps> = ({ src }) => {
  return (
    <div className="icon">
      <img src={src} alt="icon" />
    </div>
  );
};
