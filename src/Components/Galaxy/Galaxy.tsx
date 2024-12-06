import React, { useEffect, useRef } from 'react';
import webpUrl from '../../assets/video/galaxy.webp';
import styles from './Galaxy.module.css';
import { gsap } from 'gsap';

export const Galaxy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        );
      }
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className={styles.webpContainer}>
      <img src={webpUrl} className={styles.webp} alt="Galaxy" />
    </div>
  );
};
