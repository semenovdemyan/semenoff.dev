import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['footer-wrapper']}>
        <span>Semenoff.dev</span>
        <span>since 2024</span>
      </div>
    </div>
  );
};
