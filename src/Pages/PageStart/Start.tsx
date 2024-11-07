import styles from './Start.module.css';
import { HooksTester } from '../../hooks/HooksTester';

export const Start: React.FC<{ lang: 'ru' | 'en' }> = ({ lang }) => {
  return (
    <div>
      <div>
        {lang === 'ru' ? (
          <h1 className={styles.underDevelopement}>
            Сайт ещё находится в разработке.
            <br />
            Мобильная версия может отображаться некорректно.
            <br />
            <br />
            Для продолжения выберите раздел
          </h1>
        ) : (
          <h1 className={styles.underDevelopement}>
            Start page and mobile version are still in development.
            <br />
            Choose tab to continue.
          </h1>
        )}
      </div>
      <div className={styles.tester}>
        <HooksTester />
      </div>
    </div>
  );
};
