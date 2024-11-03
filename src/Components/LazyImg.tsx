import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy" // Добавляем атрибут для ленивой загрузки
    />
  );
};

export default LazyImage;
