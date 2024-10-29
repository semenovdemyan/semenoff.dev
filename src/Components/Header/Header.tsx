import { useState, useRef } from 'react';
import { Home } from '../../Pages/PageHome/Home';
import { Contacts } from '../../Pages/PageContacts/Contacts';
import { AboutMe } from '../../Pages/PageAboutMe/AboutMe';
import './Header.module.css';
import Button from '../Button/Button';
import styles from './Header.module.css';
import { gsap } from 'gsap';

const pages = {
  Home: <Home />,
  AboutMePage: <AboutMe />,
  ContactsPage: <Contacts />,
};

export const Header = () => {
  const [currentPage, setCurrentPage] = useState<keyof typeof pages>('Home');
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: keyof typeof pages) => {
    // Проверка: если текущая страница уже выбрана, ничего не делаем
    if (currentPage === page) return;

    if (contentRef.current && containerRef.current) {
      // Анимация исчезновения контента
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentPage(page);

          // Смена цвета фона
          // gsap.to(containerRef.current, {
          //   backgroundColor: getRandomColor(),
          //   duration: 0.5,
          // });

          // Анимация появления нового контента
          gsap.to(contentRef.current, {
            opacity: 1,
            duration: 0.5,
          });
        },
      });
    }
  };

  // Функция для генерации случайного цвета
  // const getRandomColor = () => {
  //   const letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  return (
    <div className={styles['header-container']} ref={containerRef}>
      <div className={styles['header-buttons']}>
        <Button label="Me" onClick={() => handlePageChange('Home')} />
        <Button
          label="My skills"
          onClick={() => handlePageChange('AboutMePage')}
        />
        <Button
          label="My contacts"
          onClick={() => handlePageChange('ContactsPage')}
        />
      </div>
      <div className={styles['content']} ref={contentRef}>
        {pages[currentPage]}
      </div>
    </div>
  );
};
