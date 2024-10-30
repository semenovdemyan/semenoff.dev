import { useState, useRef } from 'react';
import { Me } from '../../Pages/PageMe/Me';
import { Contacts } from '../../Pages/PageContacts/Contacts';
import { MySkills } from '../../Pages/PageMySkills/MySkills';
import './Header.module.css';
import Button from '../Button/Button';
import styles from './Header.module.css';
import { gsap } from 'gsap';

const pages = {
  Me: <Me />,
  MySkillsPage: <MySkills />,
  ContactsPage: <Contacts />,
};

export const Header = () => {
  const [currentPage, setCurrentPage] = useState<keyof typeof pages>('Me');
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: keyof typeof pages) => {
    // Проверка: если текущая страница уже выбрана, ничего не делаем
    if (currentPage === page) return;

    if (contentRef.current && containerRef.current) {
      // Анимация исчезновения контента
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentPage(page);

          gsap.to(contentRef.current, {
            opacity: 1,
            duration: 0.3,
          });
        },
      });
    }
  };

  return (
    <div className={styles['header-container']} ref={containerRef}>
      <div className={styles['header-buttons']}>
        <Button label="Me" onClick={() => handlePageChange('Me')} />
        <Button
          label="My skills"
          onClick={() => handlePageChange('MySkillsPage')}
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
