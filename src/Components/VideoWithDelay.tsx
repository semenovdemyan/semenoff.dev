import React, { useEffect, useRef, useState } from 'react';
import videoUrl from '../assets/video/video.mp4';
import useScreenSize from '../hooks/HookScreen';

export const VideoWithDelay: React.FC = () => {
  const screenSize = useScreenSize(); // Получаем текущий размер экрана через хук
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 1000);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);
  // Если экран меньше 768px (мобильный или планшет), скрываем компонент
  if (screenSize < '--mobile') {
    return null; // Возвращаем null, чтобы не рендерить компонент
  }
  return (
    <video
      ref={videoRef}
      muted
      src={videoUrl}
      className="video"
      autoPlay={isPlaying}
    />
  );
};
