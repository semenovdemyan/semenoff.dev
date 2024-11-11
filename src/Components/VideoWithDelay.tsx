import React, { useEffect, useRef, useState } from 'react';
import videoUrl from '../assets/video/video.mp4';
import styles from '../App.module.css';
import { gsap } from 'gsap';

export const VideoWithDelay: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 1);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      // Добавляем слушатель события окончания видео
      videoRef.current.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []);

  const handleVideoEnd = () => {
    if (containerRef.current) {
      // Плавное исчезновение контейнера с помощью GSAP
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1, // Увеличиваем продолжительность для более плавного эффекта
        ease: 'power1.out', // Добавляем easing для плавности
      });
    }
  };

  return (
    <div ref={containerRef} className={styles.videoContainer}>
      <video
        ref={videoRef}
        muted
        src={videoUrl}
        className={styles.video}
        autoPlay={isPlaying}
        preload="auto"
      />
    </div>
  );
};
