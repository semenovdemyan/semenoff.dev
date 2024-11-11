import { useState, useEffect } from 'react';

// Определим типы для разных состояний
type ScreenSize =
  | '--mobile' // меньше 440px
  | '--pad' // от 768px до 1024px
  | '--desktop-s' // от 1024px до 1440px
  | '--desktop-m' // от 1440px до 2560px
  | '--desktop-l'; // от 2560px до 3440px

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('--desktop-m'); // Изначально установим значение как 'medium'

  useEffect(() => {
    // Функция для вычисления текущего размера экрана
    const calculateScreenSize = () => {
      const width = window.innerWidth;

      if (width < 440) {
        setScreenSize('--mobile');
      } else if (width >= 768 && width <= 1024) {
        setScreenSize('--pad');
      } else if (width > 1024 && width <= 1440) {
        setScreenSize('--desktop-s');
      } else if (width > 1440 && width <= 2560) {
        setScreenSize('--desktop-m');
      } else if (width > 2560 && width <= 3440) {
        setScreenSize('--desktop-l');
      }
    };

    calculateScreenSize(); // Вызов функции при монтировании компонента
    window.addEventListener('resize', calculateScreenSize); // Добавим слушатель на изменение размера окна
    return () => {
      window.removeEventListener('resize', calculateScreenSize);
    }; // Очистим слушатель при размонтировании компонента
  }, []); // Пустой массив зависимостей, чтобы хук срабатывал только один раз при монтировании компонента

  return screenSize;
};

export default useScreenSize;