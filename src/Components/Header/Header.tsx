import { useState } from 'react';
import { Button } from '../Button/Button';
import { LangToggle } from '../../Components/LangToggle/Langtoggle';
import { Content } from '../Content/Content';
import styles from './Header.module.css';

export const Header = () => {
  const [lang, setLang] = useState<'en' | 'ru'>('ru');
  const [currentPage, setCurrentPage] = useState<
    'Start' | 'Me' | 'MySkills' | 'Contacts'
  >('Start');

  // Обработчик смены страницы
  const handlePageChange = (page: 'Start' | 'Me' | 'MySkills' | 'Contacts') => {
    setCurrentPage(page);
  };

  return (
    <div className={styles['header-container']}>
      <div className={styles['header-buttons']}>
        <nav>
          <Button
            lang={lang}
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
        </nav>
        <span className={styles['toggle']}>
          <LangToggle lang={lang} setLang={setLang} />
        </span>
      </div>
      <Content currentPage={currentPage} lang={lang} />
    </div>
  );
};
