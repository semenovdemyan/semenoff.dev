// Header.tsx
import { useState, useRef } from 'react';
import { Start } from '../../Pages/PageStart/Start';
import { Me } from '../../Pages/PageMe/Me';
import { Contacts } from '../../Pages/PageContacts/Contacts';
import { MySkills } from '../../Pages/PageMySkills/MySkills';
import { Button } from '../Button/Button';
import styles from './Header.module.css';
import { gsap } from 'gsap';
import { LangToggle } from '../../Components/LangToggle/Langtoggle';

export const Header = () => {
  const [lang, setLang] = useState<'en' | 'ru'>('ru'); // Управление языком
  const [currentPage, setCurrentPage] = useState<
    'Start' | 'Me' | 'MySkills' | 'Contacts'
  >('Start');
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

  // Отладочная информация
  console.log('Current language in Header:', lang);

  return (
    <div className={styles['header-container']} ref={containerRef}>
      <div className={styles['header-buttons']}>
        <span>
          <Button
            lang={lang} // Передаем lang в Button
            labelRu="Обо мне"
            labelEn="Me"
            onClick={() => handlePageChange('Me')}
          />
          <Button
            lang={lang}
            labelRu="Мои навыки"
            labelEn="My skills"
            onClick={() => handlePageChange('MySkills')}
          />
          <Button
            lang={lang}
            labelRu="Мои контакты"
            labelEn="My contacts"
            onClick={() => handlePageChange('Contacts')}
          />
        </span>
        <span className={styles.toggle}>
          <LangToggle lang={lang} setLang={setLang} />
        </span>
      </div>
      <div className={styles['content']} ref={contentRef}>
        {pages[currentPage]}
      </div>
    </div>
  );
};
