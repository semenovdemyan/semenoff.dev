import React from 'react';
import useScreenSize from './HookScreen'; // Импортируем хук

export const HooksTester: React.FC = () => {
  const screenSize = useScreenSize(); // Получаем текущее состояние экрана

  return (
    <div>
      <h1>Текущее разрешение экрана: {screenSize}</h1>
      {screenSize === '--mobile' && (
        <p>Экран меньше 440px — это мобильное устройство.</p>
      )}
      {screenSize === '--pad' && <p>Экран от 768px до 1024px — это планшет.</p>}
      {screenSize === '--desktop-s' && (
        <p>Экран от 1024px до 1440px — это обычный экран.</p>
      )}
      {screenSize === '--desktop-m' && (
        <p>Экран от 1440px до 2560px — это большой экран.</p>
      )}
      {screenSize === '--desktop-l' && (
        <p>Экран от 2560px до 3440px — это очень большой экран.</p>
      )}
    </div>
  );
};
