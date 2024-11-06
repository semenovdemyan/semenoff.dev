import React, { useEffect, useRef, useState } from 'react';
import videoUrl from '../assets/video/video.mp4';

const VideoWithDelay: React.FC = () => {
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

  return (
    <video
      ref={videoRef}
      muted
      src={videoUrl}
      className="video"
      autoPlay={isPlaying}
      preload="auto"
    />
  );
};

export default VideoWithDelay;
