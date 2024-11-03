import { useState, useRef } from 'react';
import { Start } from '../../Pages/PageStart/Start';
import { Me } from '../../Pages/PageMe/Me';
import { Contacts } from '../../Pages/PageContacts/Contacts';
import { MySkills } from '../../Pages/PageMySkills/MySkills';
import './Header.module.css';
import { Button } from '../Button/Button';
import styles from './Header.module.css';
import { gsap } from 'gsap';
import { LangToggle } from '../../Components/LangToggle/Langtoggle';

export const Header = () => {
  const [lang, setLang] = useState<'en' | 'ru'>('ru');
  const [currentPage, setCurrentPage] = useState<keyof typeof pages>('Start');
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const pages = {
    Start: <Start lang={lang} />,
    Me: <Me lang={lang} />,
    MySkills: <MySkills lang={lang} />,
    Contacts: <Contacts lang={lang} />,
  };

  const handlePageChange = (page: keyof typeof pages) => {
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
          onClick={() => handlePageChange('MySkills')}
        />
        <Button
          label="My contacts"
          onClick={() => handlePageChange('Contacts')}
        />
      </div>
      <div className={styles['content']} ref={contentRef}>
        {pages[currentPage]}
      </div>
      <LangToggle lang={lang} setLang={setLang} />
    </div>
  );
};
