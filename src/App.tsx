import { VideoWithDelay } from '../src/Components/VideoWithDelay';
import { Header } from './Components/Header/Header';
import { Content } from './Components/Content/Content';
import { Footer } from './Components/Footer/Footer';
import { useState } from 'react';
import { useScreenSize } from './hooks/HookScreen';
import './normalize.css';
import styles from './App.module.css';

export const App: React.FC = () => {
  const screenSize = useScreenSize();
  const [currentPage, setCurrentPage] = useState<
    'Start' | 'Me' | 'MySkills' | 'Contacts'
  >('Start');
  const [lang, setLang] = useState<'en' | 'ru'>('ru');

  return (
    <div className={styles.mainWrapper}>
      {screenSize !== '--mobile' && <VideoWithDelay />}
      <div className={styles.container}>
        <Header lang={lang} setLang={setLang} setCurrentPage={setCurrentPage} />
        <Content currentPage={currentPage} lang={lang} />
        <Footer />
      </div>
    </div>
  );
};
