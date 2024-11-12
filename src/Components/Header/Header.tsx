import { FC } from 'react';
import { Button } from '../Button/Button';
import styles from './Header.module.css';
import { LangToggle } from '../../Components/LangToggle/Langtoggle';

interface HeaderProps {
  lang: 'en' | 'ru';
  setLang: React.Dispatch<React.SetStateAction<'en' | 'ru'>>;
  setCurrentPage: React.Dispatch<
    React.SetStateAction<'Start' | 'Me' | 'MySkills' | 'Contacts'>
  >;
}

export const Header: FC<HeaderProps> = ({ lang, setLang, setCurrentPage }) => {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header-buttons']}>
        <nav>
          <Button
            lang={lang}
            labelRu="Обо мне"
            labelEn="Me"
            onClick={() => setCurrentPage('Me')}
          />
          <Button
            lang={lang}
            labelRu="Мои навыки"
            labelEn="My skills"
            onClick={() => setCurrentPage('MySkills')}
          />
          <Button
            lang={lang}
            labelRu="Мои контакты"
            labelEn="My contacts"
            onClick={() => setCurrentPage('Contacts')}
          />
        </nav>
        <span className={styles.toggle}>
          <LangToggle lang={lang} setLang={setLang} />
        </span>
      </div>
    </div>
  );
};
