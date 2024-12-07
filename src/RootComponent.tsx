import { App } from './App.jsx';
import './normalize.css';
import styles from './App.module.css';
import { VideoWithDelay } from '../src/Components/VideoWithDelay';
import { useScreenSize } from './hooks/HookScreen';

export const RootComponent = () => {
  const screenSize = useScreenSize();

  return (
    <div className={styles.mainWrapper}>
      {screenSize !== '--mobile' && <VideoWithDelay />}
      <App />
    </div>
  );
};
