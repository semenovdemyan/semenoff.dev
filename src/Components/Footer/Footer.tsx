import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['footer-wrapper']}>
        <div>Sememoff.Dev</div>
        <div>2024</div>
      </div>
    </div>
  );
};
