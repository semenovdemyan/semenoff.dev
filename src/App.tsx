import { Header } from './Components/Header/Header';
import { Content } from './Components/Content/Content';
import { Footer } from './Components/Footer/Footer';
import styles from './App.module.css';

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Content currentPage={'Start'} lang={'en'} />
      <Footer />
    </div>
  );
};
